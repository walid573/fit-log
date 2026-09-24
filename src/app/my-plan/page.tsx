import React from 'react';

const MyPlanPage = () => {
    return (
        <main className='px-12 mt-10'>
            <h2 className='font-oswald text-[30px] font-bold py-1'>MY PLAN</h2>
            <p className='text-[#8A92A0] text-[14px]'>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='bg-[#232732]/60 grid grid-cols-3  justify-between mx-auto w-[90%] h-30.5 px-10 py-3'>
                <div className='px-2'>
                    <h2>Exercises</h2>
                    <p>0</p>
                </div>
                <div>
                    <h2>Minutes</h2>
                    <p>0</p>
                </div>
                <div>
                    <h2>Calories</h2>
                    <p>0</p>
                </div>
            </div>
        </main>
    );
};

export default MyPlanPage;