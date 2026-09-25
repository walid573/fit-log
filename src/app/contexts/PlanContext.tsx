"use client";

import { IWorkout } from "@/app/types/type";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
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

export const PlanProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  // Add workout to today's plan
  const addToPlan = (workout: IWorkout) => {
    setPlan((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      if (prev.length >= 5) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove workout from today's plan
  const removeFromPlan = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

   // Mark workout as completed
  const markAsDone = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };
  // Save workout
  const addToSaved = (workout: IWorkout) => {
    setSaved((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove saved workout
  const removeFromSaved = (id: number) => {
    setSaved((prev) =>
      prev.filter((item) => item.id !== id)
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