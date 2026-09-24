"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePlan } from "../contexts/PlanContext";


const MyPlanPage = () => {
  const { plan, removeFromPlan } = usePlan();

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Calculate metrics
  const exercises = plan.length;

  const minutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="px-12 mt-10">
      {/* Header */}
      <h2 className="font-oswald text-[30px] font-bold py-1">
        MY PLAN
      </h2>

      <p className="text-[#8A92A0] text-[14px] py-1">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="bg-[#232732]/60 grid grid-cols-3 justify-between items-center mx-auto w-full h-35.5 px-10 py-8 mt-4 rounded-2xl">
        
        {/* Exercises */}
        <div className="px-2">
          <h2 className="text-[#8A92A0]">
            Exercises
          </h2>

          <p className="text-[36px] text-[#CCFF00]">
            {exercises}
          </p>
        </div>

        {/* Minutes */}
        <div className="pl-6 border-x-2 border-[#232732]/60">
          <h2 className="text-[#8A92A0]">
            Minutes
          </h2>

          <p className="text-[36px]">
            {minutes}
          </p>
        </div>

        {/* Calories */}
        <div className="px-4 ml-2">
          <h2 className="text-[#8A92A0]">
            Calories
          </h2>

          <p className="text-[36px]">
            {calories}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-[#232732]">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("today")}
            className={`pb-3 font-semibold ${
              activeTab === "today"
                ? "text-[#CCFF00] border-b-2 border-[#CCFF00]"
                : "text-[#8A92A0]"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-3 font-semibold ${
              activeTab === "saved"
                ? "text-[#CCFF00] border-b-2 border-[#CCFF00]"
                : "text-[#8A92A0]"
            }`}
          >
            Saved
          </button>
        </div>
      </div>

      {/* Today's Plan */}
      {activeTab === "today" && (
        <div className="mt-6">
          {plan.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h2 className="font-oswald text-3xl font-bold">
                NOTHING HERE YET
              </h2>

              <p className="text-[#8A92A0] mt-2">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 bg-[#CCFF00] text-black px-6 py-3 rounded-lg font-semibold"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            /* Workout List */
            <div className="space-y-4">
              {plan.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-[#232732]/60 rounded-2xl p-4 flex gap-5 items-center"
                >
                  {/* Image */}
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="w-32 h-24 object-cover rounded-xl"
                  />

                  {/* Workout Info */}
                  <div className="flex-1">
                    <h2 className="font-oswald text-xl font-bold">
                      {workout.name}
                    </h2>

                    <p className="text-[#8A92A0] text-sm mt-1">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-5 mt-3 text-sm text-[#8A92A0]">
                      <span>
                        ⏱ {workout.duration} min
                      </span>

                      <span>
                        🔥 {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="border border-[#3A404C] px-4 py-2 rounded-lg text-sm text-center"
                    >
                      View Details
                    </Link>

                    <button
                      className="bg-[#CCFF00] text-black px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      Mark as Done
                    </button>

                    <button
                      onClick={() => removeFromPlan(workout.id)}
                      className="text-red-400 text-sm hover:text-red-300"
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Saved */}
      {activeTab === "saved" && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="font-oswald text-3xl font-bold">
            SAVED
          </h2>

          <p className="text-[#8A92A0] mt-2">
            Your saved workouts will appear here.
          </p>
        </div>
      )}
    </main>
  );
};

export default MyPlanPage;