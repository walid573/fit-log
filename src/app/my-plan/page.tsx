import Link from 'next/link';
import React from 'react';

const MyPlanPage = () => {
    return (
        <main className='px-12 mt-10'>
            <h2 className='font-oswald text-[30px] font-bold py-1'>MY PLAN</h2>
            <p className='text-[#8A92A0] text-[14px] py-1'>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='bg-[#232732]/60 grid grid-cols-3  justify-between items-center mx-auto w-full h-35.5 px-10 py-8 mt-4 rounded-2xl '>
                <div className='px-2 '>
                    <h2 className='text-[#8A92A0]'>Exercises</h2>
                    <p className='text-[36px] text-[#CCFF00]'>0</p>
                </div>
                <div className='pl-6 border-x-2  border-[#232732]/60'>
                    <h2 className='text-[#8A92A0]'>Minutes</h2>
                    <p className='text-[36px]'>0</p>
                </div>
                <div className='px-4 ml-2'>
                    <h2 className='text-[#8A92A0]'>Calories</h2>
                    <p className='text-[36px]'>0</p>
                </div>
            </div>
            <div className=''>
                 
                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>
                    

                   
                </div>
                <div>
                    <h2 className='text-[12px] text-[#8A92A0] '>Sort By</h2>
                </div>
            </div>

        </main>
    );
};

export default MyPlanPage;