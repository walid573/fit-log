import { IWorkout } from '@/app/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface workoutdetailsType {
    params: Promise<{
        id: string;
    }>;
}


const getWorkOutData = async () => {

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    if (!res.ok) {
        throw new Error('Failed to fetch books');
    }

    return res.json();
}

const LibraryDetailsPage = async ({ params }: workoutdetailsType) => {
    const { id } = await params;
    const workoutdata = await getWorkOutData()
    const workout = workoutdata.find(
        (work: IWorkout) => String(work.id) === String(id)
    );
    return (


        <div className="w-full mx-auto   text-white p-6 md:p-8  border border-gray-800/60 shadow-2xl">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-500 transition hover:text-emerald-600"
            >
                ← Back to Home
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-[80%] mx-auto">

                {/* Left Column: Image */}
                <div className=" rounded-xl ">
                    <Image
                        src={workout.image}
                        alt={workout.name || "Workout Image"}
                        width={588}
                        height={773}
                        priority
                        className="object-cover rounded-xl"
                        
                    />
                </div>

                {/* Right Column: Details */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        {/* Header Title & Description */}
                        <h1 className="text-4xl md:text-3xl font-black font-oswald tracking-wide uppercase text-white">
                            {workout.name}
                        </h1>
                        <p className="text-xs md:text-sm font-inter text-[#9CA3AF] mt-2 leading-relaxed">
                            {workout.description}
                        </p>

                        {/* Muscle Group Badges */}
                        <div className="flex items-center gap-2 mt-4">
                            {workout.muscleGroups?.map((group, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-[#CCFF00] text-black text-[12px] font-semibold  tracking-wider uppercase rounded-full"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Stats Table Card */}
                        <div className="bg-[#12141c] border border-gray-800/80 rounded-2xl p-4 mt-6 divide-y divide-gray-800/60">
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[12px]">
                                    EQUIPMENT
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.equipment}</span>
                            </div>

                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[12px]">
                                    DIFFICULTY
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.difficulty}</span>
                            </div>

                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[12px]">
                                    SETS
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.sets}</span>
                            </div>

                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[12px]">
                                    REPS
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.reps}</span>
                            </div>

                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[12px]">
                                    DURATION
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.duration} min</span>
                            </div>

                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[11px]">
                                    CALORIES
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-[#9CA3AF] font-bold uppercase tracking-wider text-[11px]">
                                    RATING
                                </span>
                                <span className="text-[#E5E7EB] font-semibold">{workout.rating}</span>
                            </div>
                        </div>

                        {/* Instructions Section */}
                        <div className="mt-6">
                            <h3 className="text-[16px] font-bold font-inter uppercase tracking-wider text-white mb-3">
                                INSTRUCTIONS
                            </h3>
                            <ol className="space-y-2">
                                {workout.instructions?.map((step, idx) => (
                                    <li key={idx} className="flex gap-2 text-[14px] text-[#D1D5DB] leading-relaxed">
                                        <span className="text-gray-500 font-bold select-none">{idx + 1}.</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex items-center gap-3 mt-8">
                        <button className="flex items-center gap-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold text-[14px] px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-[#ccff00]/10">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <path d="M12 14v4M10 16h4" />
                            </svg>
                            <span>Add to today's plan</span>
                        </button>

                        <button className="flex items-center gap-2 bg-transparent hover:bg-gray-800/50 border border-gray-800 hover:border-gray-700 text-gray-300 font-semibold text-[14px] px-4 py-2.5 rounded-xl transition-all active:scale-95">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Save for later</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default LibraryDetailsPage;