import Image from "next/image";
import { IWorkout } from "../types/type";
import Link from "next/link";

export interface LibraryCardProps {
    workout: IWorkout;
}

export default function LibraryCard({ workout }: LibraryCardProps) {

    return (
        <Link href={`/workouts/${workout.id}`}>
        <section className="w-full max-w-150 bg-[#12141a] border border-gray-800/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-gray-700">

            <div className="relative w-full h-66 overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name || "workout img"}
                    fill
                    className="object-cover"

                />
            </div>


            <div className="py-7 px-6 mb-3">

                <div className="flex items-center gap-2 mb-3 flex-wrap py-2">
                    {workout.muscleGroups?.map((group: string, idx: number) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-[#C2F800] text-black text-[11px] font-black tracking-wider uppercase rounded-full"
                        >
                            {group}
                        </span>
                    ))}
                </div>


                <h3 className="text-lg font-black tracking-wide text-white uppercase font-sans">
                    {workout.name}
                </h3>


                <p className="text-xs text-gray-400 font-medium mt-1">
                    {workout.equipment}
                </p>


                <div className="border-t border-gray-800/80 my-4" />


                <div className="flex items-center gap-5 text-xs text-gray-400 font-medium">

                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{workout.duration} min</span>
                    </div>


                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5Z" />
                        </svg>
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </section>
        </Link>
    )
}