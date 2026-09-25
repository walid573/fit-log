

"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { Check, ChevronDown, X } from "lucide-react";

import { usePlan } from "../contexts/PlanContext";
import { IWorkout } from "../types/type";

type WorkoutId = IWorkout["id"];

type ActiveTab = "today" | "saved";

type SortBy = "duration" | "calories" | "rating";



interface WorkoutCardProps {
  workout: IWorkout;
  activeTab: ActiveTab;
  alreadyAdded: boolean;
  onMarkAsDone: (id: WorkoutId) => void;
  onRemoveFromPlan: (id: WorkoutId) => void;
  onAddToPlan: (workout: IWorkout) => void;
  onRemoveFromSaved: (id: WorkoutId) => void;
}

const WorkoutCard = ({
  workout,
  activeTab,
  alreadyAdded,
  onMarkAsDone,
  onRemoveFromPlan,
  onAddToPlan,
  onRemoveFromSaved,
}: WorkoutCardProps) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        bg-[#232732]/60
        p-4
        sm:p-5
        lg:flex-row
        lg:items-center
        lg:gap-5
      "
    >

      <div className="w-full shrink-0 lg:w-auto">
        <Image
          src={workout.image}
          alt={workout.name}
          width={130}
          height={80}
          className="
            h-44
            w-full
            rounded-xl
            object-cover
            sm:h-52
            lg:h-20
            lg:w-32.5
          "
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="truncate font-oswald text-lg font-bold sm:text-xl">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-[#8A92A0]">
          {workout.equipment}
        </p>

        <div
          className="
            mt-3
            flex
            flex-wrap
            gap-x-4
            gap-y-2
            text-xs
            text-[#8A92A0]
            sm:text-sm
          "
        >
          <span>⏱ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>★ {workout.rating}</span>
        </div>
      </div>

      <div
        className="
          flex
          w-full
          flex-nowrap
          items-center
          gap-2
          sm:gap-3
          lg:w-auto
          lg:flex-nowrap
        "
      >

        <Link
          href={`/workouts/${workout.id}`}
          className="
            flex-1
            whitespace-nowrap
            rounded-full
            border
            border-[#3A404C]
            px-4
            py-2
            text-center
            text-xs
            transition
            hover:border-[#CCFF00]
            sm:flex-none
            sm:px-5
            sm:text-sm
          "
        >
          View Details
        </Link>


        {activeTab === "today" && (
          <>
            <button
              type="button"
              onClick={() => onMarkAsDone(workout.id)}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-1.5
                whitespace-nowrap
                rounded-full
                bg-[#CCFF00]
                px-4
                py-2
                text-xs
                font-semibold
                text-black
                transition
                hover:bg-[#b8e600]
                sm:flex-none
                sm:text-sm
              "
            >
              <Check size={16} strokeWidth={2.5} />
              Mark as Done
            </button>

            <button
              type="button"
              onClick={() => onRemoveFromPlan(workout.id)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#6B7280] transition hover:bg-red-500/10 hover:text-red-400"
              aria-label={`Remove ${workout.name} from today's plan`}
            >
              <X size={19} />
            </button>
          </>
        )}


        {activeTab === "saved" && (
          <>
            <button
              type="button"
              onClick={() => onAddToPlan(workout)}
              disabled={alreadyAdded}
              className={`
                flex-1
                whitespace-nowrap
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                transition
                sm:flex-none
                sm:text-sm
                ${alreadyAdded
                  ? "cursor-not-allowed bg-[#232732] text-[#8A92A0]"
                  : "bg-[#CCFF00] text-black hover:bg-[#b8e600]"
                }
              `}
            >
              {alreadyAdded ? "Added" : "Add to Plan"}
            </button>

            <button
              type="button"
              onClick={() => onRemoveFromSaved(workout.id)}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                text-[#6B7280]
                transition
                hover:bg-red-500/10
                hover:text-red-400
              "
              aria-label={`Remove ${workout.name} from saved workouts`}
            >
              <X size={19} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};


interface EmptyStateProps {
  activeTab: ActiveTab;
}

const EmptyState = ({ activeTab }: EmptyStateProps) => {
  return (
    <div
      className="flex        flex-col items-center justify-center rounded-xl   border-2   border-dotted    border-[#FFFFFF]/10  px-5  py-20  text-center sm:py-28"
    >
      <h2 className="font-oswald text-lg font-bold sm:text-xl">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 max-w-md font-inter text-xs leading-5 text-[#A1A1AA] sm:text-sm">
        {activeTab === "today"
          ? "Browse the library and add a lift to get today moving."
          : "Browse the library and add to Save for later."}
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#CCFF00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#b8e600] sm:px-6 sm:text-base"
      >
        Go to workouts
      </Link>
    </div>
  );
};


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

  const [activeTab, setActiveTab] = useState<ActiveTab>(
    searchParams.get("tab") === "saved" ? "saved" : "today"
  );

  const [sortBy, setSortBy] = useState<SortBy>("duration");



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
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;

        case "calories":
          return b.caloriesBurned - a.caloriesBurned;

        case "duration":
        default:
          return b.duration - a.duration;
      }
    }
  );



  const handleMarkAsDone = (id: WorkoutId) => {
    const workout = plan.find((item) => item.id === id);

    markAsDone(id);

    if (workout) {
      toast.success(`${workout.name} marked as done!`);
    }
  };

  const handleRemoveFromPlan = (id: WorkoutId) => {
    const workout = plan.find((item) => item.id === id);

    removeFromPlan(id);

    if (workout) {
      toast.success(
        `${workout.name} removed from today's plan.`
      );
    }
  };

  const handleAddToPlan = (workout: IWorkout) => {
    addToPlan(workout);

    toast.success(`${workout.name} added to your plan!`);
  };

  const handleRemoveFromSaved = (id: WorkoutId) => {
    const workout = saved.find((item) => item.id === id);

    removeFromSaved(id);

    if (workout) {
      toast.success(
        `${workout.name} removed from saved workouts.`
      );
    }
  };


  return (
    <main className="mt-6 w-full px-4 pb-10 sm:mt-8 sm:px-6 lg:mt-10 lg:px-10 xl:px-12">

      <div>
        <h2 className="py-1 font-oswald text-2xl font-bold sm:text-[28px] lg:text-[30px]">
          MY PLAN
        </h2>

        <p className="py-1 text-xs text-[#8A92A0] sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-4 grid w-full grid-cols-1 gap-5 rounded-2xl bg-[#232732]/60 px-5 py-5 sm:grid-cols-3 sm:gap-0 sm:px-6 sm:py-7 lg:px-10">

        <div className="px-1 sm:px-2">
          <h2 className="text-sm text-[#8A92A0] sm:text-base">
            Exercises
          </h2>

          <p className="mt-1 text-3xl text-[#CCFF00] sm:text-[36px]">
            {exercises}
          </p>
        </div>


        <div className="px-1 sm:border-x-2 sm:border-[#232732] sm:pl-6">
          <h2 className="text-sm text-[#8A92A0] sm:text-base">
            Minutes
          </h2>

          <p className="mt-1 text-3xl sm:text-[36px]">
            {minutes}
          </p>
        </div>

        <div className="px-1 sm:ml-2 sm:px-4">
          <h2 className="text-sm text-[#8A92A0] sm:text-base">
            Calories
          </h2>

          <p className="mt-1 text-3xl sm:text-[36px]">
            {calories}
          </p>
        </div>
      </div>


      <div className="mt-6 flex flex-col gap-4 border-b border-[#232732] pb-2 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">

        <div className="w-full sm:w-auto">
          <div className="flex gap-5 overflow-x-auto sm:gap-8">
            <Link
              href="/my-plan?tab=plan"
              onClick={() => setActiveTab("today")}
              className={`
                whitespace-nowrap
                pb-3
                text-sm
                font-semibold
                sm:text-base
                ${activeTab === "today"
                  ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
                  : "text-[#8A92A0]"
                }
              `}
            >
              Today&apos;s Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              onClick={() => setActiveTab("saved")}
              className={`
                whitespace-nowrap
                pb-3
                text-sm
                font-semibold
                sm:text-base
                ${activeTab === "saved"
                  ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
                  : "text-[#8A92A0]"
                }
              `}
            >
              Saved
            </Link>
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <label
            htmlFor="sort-workouts"
            className="text-xs text-[#8A92A0] sm:text-sm"
          >
            Sort by
          </label>

          <div className="relative">
            <select
              id="sort-workouts"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortBy)
              }
              className="min-w-32.5 appearance-none rounded-lg border border-[#3A404C] bg-[#232732] px-3 py-2 pr-9 text-sm text-white focus:border-[#CCFF00] focus:outline-none sm:min-w-35"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8A92A0]"
            />
          </div>
        </div>
      </div>


      <div className="mb-4 mt-5 sm:mt-6">
        {workoutsToDisplay.length === 0 ? (
          <EmptyState activeTab={activeTab} />
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
                alreadyAdded={plan.some(
                  (item) => item.id === workout.id
                )}
                onMarkAsDone={handleMarkAsDone}
                onRemoveFromPlan={handleRemoveFromPlan}
                onAddToPlan={handleAddToPlan}
                onRemoveFromSaved={handleRemoveFromSaved}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;

