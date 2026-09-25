"use client";

import React from "react";
import { usePlan } from "@/app/contexts/PlanContext";
import { IWorkout } from "@/app/types/type";
import { toast } from "react-toastify";

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

  const handleSave = () => {
    if (alreadySaved) {
      toast.info(`${workout.name} is already saved.`);
      return;
    }

    addToSaved(workout);

    toast.success(`${workout.name} saved for later!`);
  };

  return (
    <button
      onClick={handleSave}
      disabled={alreadySaved}
      className={`flex items-center gap-2 border font-semibold text-[14px] px-4 py-2.5 rounded-xl transition-all ${
        alreadySaved
          ? "bg-[#232732] border-[#CCFF00] text-[#CCFF00] cursor-not-allowed"
          : "bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800/50"
      }`}
    >
      <svg
        className="w-4 h-4"
        fill={alreadySaved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 0-2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>

      <span>
        {alreadySaved ? "Saved" : "Save for later"}
      </span>
    </button>
  );
};

export default AddToSaveButton;