"use client";

import React from "react";
import { usePlan } from "@/app/contexts/PlanContext";
import { IWorkout } from "@/app/types/type";
import { toast } from "react-toastify";
import { Bookmark } from "lucide-react";

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
          ? "bg-[#232732]   cursor-not-allowed"
          : "bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800/50"
      }`}
    >
      <Bookmark
  size={18}
  strokeWidth={2}
  fill={alreadySaved ? "currentColor" : "none"}
/>

      <span>
        {alreadySaved ? "Saved" : "Save for later"}
      </span>
    </button>
  );
};

export default AddToSaveButton;