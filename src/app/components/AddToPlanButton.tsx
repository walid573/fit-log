"use client";

import React from "react";
import { usePlan } from "@/app/contexts/PlanContext";
import { IWorkout } from "@/app/types/type";
import { toast } from "react-toastify";
import { CalendarPlus } from "lucide-react";

interface AddToPlanButtonProps {
  workout: IWorkout;
}

const AddToPlanButton = ({
  workout,
}: AddToPlanButtonProps) => {

  const { addToPlan, plan } = usePlan();

  const alreadyAdded = plan.some(
    (item) => item.id === workout.id
  );

  const handleAddToPlan = () => {
    if (alreadyAdded) {
      toast.info(`${workout.name} is already in your plan.`);
      return;
    }

    if (plan.length >= 5) {
      toast.warning("Your plan is full. Maximum 5 workouts.");
      return;
    }

    addToPlan(workout);

    toast.success(`${workout.name} added to your plan!`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={alreadyAdded}
      className={`flex items-center gap-2 font-semibold text-[14px] px-4 py-2.5 rounded-xl transition-all active:scale-95 ${
        alreadyAdded
          ? "bg-[#232732] text-[#8A92A0] cursor-not-allowed"
          : "bg-[#CCFF00] hover:bg-[#b8e600] text-black"
      }`}
    >
      <span>
        {alreadyAdded ?( "Added" ): (
          <div className="flex gap-1 items-center">
          <CalendarPlus size={18} strokeWidth={2.5} />
        <span>Add to Plan</span>
          </div>
        )}
      </span>
    </button>
  );
};

export default AddToPlanButton;