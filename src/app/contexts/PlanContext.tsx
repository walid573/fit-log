"use client";

import { IWorkout } from "@/app/types/type";
import {
  createContext,
  ReactNode,
  useContext,
  useSyncExternalStore,
} from "react";

interface PlanContextType {
  plan: IWorkout[];
  saved: IWorkout[];

  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;
  markAsDone: (id: number) => void;

  addToSaved: (workout: IWorkout) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

const emptyData = "[]";

const subscribe = (callback: () => void) => {
  window.addEventListener("fitlog-storage", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("fitlog-storage", callback);
    window.removeEventListener("storage", callback);
  };
};

const getPlanSnapshot = () => {
  return localStorage.getItem(PLAN_KEY) ?? emptyData;
};

const getSavedSnapshot = () => {
  return localStorage.getItem(SAVED_KEY) ?? emptyData;
};

const getServerSnapshot = () => {
  return emptyData;
};

export const PlanProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const planData = useSyncExternalStore(
    subscribe,
    getPlanSnapshot,
    getServerSnapshot
  );

  const savedData = useSyncExternalStore(
    subscribe,
    getSavedSnapshot,
    getServerSnapshot
  );

  const plan: IWorkout[] = JSON.parse(planData);
  const saved: IWorkout[] = JSON.parse(savedData);

  const updatePlan = (newPlan: IWorkout[]) => {
    localStorage.setItem(
      PLAN_KEY,
      JSON.stringify(newPlan)
    );

    window.dispatchEvent(new Event("fitlog-storage"));
  };

  const updateSaved = (newSaved: IWorkout[]) => {
    localStorage.setItem(
      SAVED_KEY,
      JSON.stringify(newSaved)
    );

    window.dispatchEvent(new Event("fitlog-storage"));
  };

  const addToPlan = (workout: IWorkout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return;
    }

    if (plan.length >= 5) {
      return;
    }

    updatePlan([...plan, workout]);
  };

  const removeFromPlan = (id: number) => {
    updatePlan(
      plan.filter((item) => item.id !== id)
    );
  };

  const markAsDone = (id: number) => {
    updatePlan(
      plan.filter((item) => item.id !== id)
    );
  };

  const addToSaved = (workout: IWorkout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return;
    }

    updateSaved([...saved, workout]);
  };

  const removeFromSaved = (id: number) => {
    updateSaved(
      saved.filter((item) => item.id !== id)
    );
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        markAsDone,
        addToSaved,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
};