import Link from 'next/link';
import React from 'react';
import BannerImg from '../assets/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <section className='mt-12   px-6'>
            <div className=' bg-[#15171D] py-12 border border-[#222630] flex justify-between items-center rounded-2xl'>
                <div className='pl-14 space-y-5 '>
                    <h3 className='text-[#C2F800] font-inter text-[11px] font-bold'>WORKOUT LIBRARY</h3>
                    <h1 className='text-[60px] leading-13 font-oswald font-extrabold max-w-[80%]'>TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className='text-[#9CA3AF] text-[16px] py-2'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a href="#library" className='btn bg-[#C2F800] text-black font-inter font-bold px-6 py-3'>BROWSE WORKOUTS</a>
                    
                </div>
                <div className='pr-40'>
                    <Image src={BannerImg} alt='banner' width={500} height={334}></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;