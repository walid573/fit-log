"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePlan } from "../contexts/PlanContext";
import Image from "next/image";

import { useSearchParams } from "next/navigation";


const MyPlanPage = () => {
  const {
    plan,
    saved,
    addToPlan,
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = usePlan();

  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<"today" | "saved">(
    searchParams.get("tab") === "saved" ? "saved" : "today"
  );
  
  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const exercises = plan.length;

  const minutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );
  const workoutsToDisplay =
    activeTab === "today" ? plan : saved;

  const sortedWorkouts = [...workoutsToDisplay].sort(
    (a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "duration") {
        return b.duration - a.duration;
      }

      return 0;
    }
  );

  return (
    <main className="px-12 mt-10">
      <h2 className="font-oswald text-[30px] font-bold py-1">
        MY PLAN
      </h2>

      <p className="text-[#8A92A0] text-[14px] py-1">
        Cap of five lifts for today. Finish them, then load more.
      </p>


      <div className="bg-[#232732]/60 grid grid-cols-3 justify-between items-center mx-auto w-full h-35.5 px-10 py-8 mt-4 rounded-2xl">


        <div className="px-2">
          <h2 className="text-[#8A92A0]">
            Exercises
          </h2>

          <p className="text-[36px] text-[#CCFF00]">
            {exercises}
          </p>
        </div>


        <div className="pl-6 border-x-2 border-[#232732]/60">
          <h2 className="text-[#8A92A0]">
            Minutes
          </h2>

          <p className="text-[36px]">
            {minutes}
          </p>
        </div>


        <div className="px-4 ml-2">
          <h2 className="text-[#8A92A0]">
            Calories
          </h2>

          <p className="text-[36px]">
            {calories}
          </p>
        </div>
      </div>


      <div className="mt-8 pb-2 border-b border-[#232732] flex justify-between items-center">
        <div>
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("today")}
              className={`pb-3 font-semibold ${activeTab === "today"
                ? "text-[#CCFF00] border-b-2 border-[#CCFF00]"
                : "text-[#8A92A0]"
                }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`pb-3 font-semibold ${activeTab === "saved"
                ? "text-[#CCFF00] border-b-2 border-[#CCFF00]"
                : "text-[#8A92A0]"
                }`}
            >
              Saved
            </button>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <div> <h2 className="text-[12px] text-[#8A92A0]">Sort by</h2> </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "calories" | "rating"
                )
              }
              className="select appearance-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

      </div>


      {activeTab === "today" && (
        <div className="mt-6 mb-4">
          {plan.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-30 text-center rounded-xl border-2 border-dotted border-[#FFFFFF]/10">
              <h2 className="font-oswald text-[20px] font-bold">
                NOTHING HERE YET
              </h2>

              <p className="text-[#A1A1AA] mt-2 text-[12px] font-inter">
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
            <div className="space-y-4">
              {sortedWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-[#232732]/60 rounded-2xl p-4 pr-10 flex gap-5 items-center"
                >

                  <Image src={workout.image}
                    alt={workout.name}
                    width={130}
                    height={80}
                    className=" object-cover rounded-xl">

                  </Image>

                  <div className="flex-1">
                    <h2 className="font-oswald text-xl font-bold">
                      {workout.name}
                    </h2>

                    <p className="text-[#8A92A0] text-sm mt-1">
                      {workout.equipment}
                    </p>

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


                  <div className="flex flex-row gap-3">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="border border-[#3A404C] px-5 py-2 rounded-full text-sm text-center"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => markAsDone(workout.id)}
                      className="bg-[#CCFF00] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition"
                    >
                      ✓ Mark as Done
                    </button>

                    <button
                      onClick={() => removeFromPlan(workout.id)}
                      className="text-[#6B7280] text-xl  hover:text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "saved" && (
        <div className="mt-6 mb-4">

          {saved.length === 0 ? (

            <div className="flex flex-col items-center justify-center py-30 text-center rounded-xl border-2 border-dotted border-[#FFFFFF]/10">

              <h2 className="font-oswald text-[20px] font-bold">
                NOTHING HERE YET
              </h2>

              <p className="text-[#A1A1AA] mt-2 text-[12px] font-inter">
                Browse the library and add to Save for later.
              </p>

              <Link
                href="/"
                className="mt-6 bg-[#CCFF00] text-black px-6 py-3 rounded-lg font-semibold"
              >
                Go to workouts
              </Link>

            </div>
          ) : (

            <div className="space-y-4">

              {sortedWorkouts.map((workout) => (

                <div
                  key={workout.id}
                  className="bg-[#232732]/60 rounded-2xl p-4 pr-10 flex gap-5 items-center"
                >


                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={130}
                    height={80}
                    className=" object-cover rounded-xl"
                  />


                  <div className="flex-1">

                    <h2 className="font-oswald text-xl font-bold">
                      {workout.name}
                    </h2>

                    <p className="text-[#8A92A0] text-sm mt-1">
                      {workout.equipment}
                    </p>


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


                  <div className="flex flex-row gap-3 items-center">

                    <Link
                      href={`/workouts/${workout.id}`}
                      className="border border-[#3A404C] px-5 py-2 rounded-full text-sm text-center"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => addToPlan(workout)}
                      disabled={plan.some((item) => item.id === workout.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${plan.some((item) => item.id === workout.id)
                        ? "bg-[#232732] text-[#8A92A0] cursor-not-allowed"
                        : "bg-[#CCFF00] text-black hover:bg-[#b8e600]"
                        }`}
                    >
                      {plan.some((item) => item.id === workout.id)
                        ? "Added"
                        : "Add to Plan"}
                    </button>


                    <button
                      onClick={() => removeFromSaved(workout.id)}
                      className="text-[#6B7280] text-xl hover:text-red-400"
                    >
                      ✕
                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>
      )}
    </main>
  );
};

export default MyPlanPage;