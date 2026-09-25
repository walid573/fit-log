import React from 'react';
import BannerImg from '../assets/banner.png';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const Banner = () => {
  return (
    <section className="mt-8 md:mt-12 w-full px-4 sm:px-6 lg:px-10">
      <div className="bg-[#15171D] border border-[#222630] rounded-2xl overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 sm:px-8 lg:px-14 py-10 lg:py-14">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-[#C2F800] font-inter text-[11px] font-bold tracking-widest mb-4">
              WORKOUT LIBRARY
            </h3>

            <h1 className="font-oswald font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-xl mx-auto lg:mx-0">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-[#9CA3AF] text-sm sm:text-base mt-5 mb-8 leading-7 max-w-lg mx-auto lg:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="inline-flex gap-1 items-center justify-center rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-bold text-black hover:scale-105 transition-transform"
            >
                <ArrowDown size={18} strokeWidth={2.5} />
              <span>
                BROWSE WORKOUTS
                </span>
            </a>
          </div>


          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={BannerImg}
              alt="banner"
              className="w-full max-w-65 sm:max-w-85 md:max-w-105 lg:max-w-125 h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;