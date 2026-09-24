"use client";

import React from "react";
import { usePlan } from "@/app/contexts/PlanContext";
import { IWorkout } from "@/app/types/type";

interface AddToPlanButtonProps {
  workout: IWorkout;
}

const AddToPlanButton = ({ workout }: AddToPlanButtonProps) => {
  const { addToPlan, plan } = usePlan();

  const alreadyAdded = plan.some(
    (item) => item.id === workout.id
  );

  return (
    <button
      onClick={() => addToPlan(workout)}
      disabled={alreadyAdded}
      className={`flex items-center gap-2 font-semibold text-[14px] px-4 py-2.5 rounded-xl transition-all active:scale-95 ${
        alreadyAdded
          ? "bg-[#232732] text-[#8A92A0] cursor-not-allowed"
          : "bg-[#CCFF00] hover:bg-[#b8e600] text-black"
      }`}
    >
      <span>
        {alreadyAdded ? "Added" : "Add to Plan"}
      </span>
    </button>
  );
};

export default AddToPlanButton;