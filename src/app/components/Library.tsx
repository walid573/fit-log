
import React from 'react';
import LibraryCard from './LibraryCard';
import { IWorkout } from '../types/type';


const getWorkOutData = async() => {
    try{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json()
    }catch(error){
        console.error("error fetching data", error);
        return [];
        
    }
    
}

const Library = async() => {

    const workouts = await getWorkOutData()
    console.log("workouts" , workouts);
    
    return (
        <section className='py-16 px-6'>
            <h2 className='text-[30px] font-bold font-oswald'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF] text-[14px] font-inter'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3  gap-8 mt-6'>
                {
                    workouts.map((workout: IWorkout,index:number) => <LibraryCard key={index} workout={workout}></LibraryCard>)
                }
            </div>
        </section>
    );
};

export default Library;