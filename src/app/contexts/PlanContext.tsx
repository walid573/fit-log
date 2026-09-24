"use client";


import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IWorkout } from "../types/type";

interface PlanContextType {
  plan: IWorkout[];
  setPlan: Dispatch<SetStateAction<IWorkout[]>>;
  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);

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

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        setPlan,
        addToPlan,
        removeFromPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};