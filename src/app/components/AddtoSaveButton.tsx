"use client";

import React from "react";
import { usePlan } from "@/app/contexts/PlanContext";
import { IWorkout } from "@/app/types/type";

interface AddToSaveButtonProps {
  workout: IWorkout;
}

const AddToSaveButton = ({
  workout,
}: AddToSaveButtonProps) => {
  const { addToSaved, saved } = usePlan();

  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  return (
    <button
      onClick={() => addToSaved(workout)}
      disabled={alreadySaved}
      className={`flex items-center gap-2 border font-semibold text-[14px] px-4 py-2.5 rounded-xl transition-all ${
        alreadySaved
          ? "bg-[#232732] border-[#CCFF00] text-[#CCFF00] cursor-not-allowed"
          : "bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800/50"
      }`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>

      <span>
        {alreadySaved ? "Saved" : "Save for later"}
      </span>
    </button>
  );
};

export default AddToSaveButton;