
import React from 'react';
import FooterImg from '../assets/footer.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="border-t border-[#222630] bg-[#090A0D] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10">
            <div className=" flex w-full  flex-col items-center justify-between gap-4 sm:gap-5 md:flex-row md:gap-6 md:text-left">

                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                    <Image
                        src={FooterImg}
                        alt="FitLog logo"
                        width={24}
                        height={24}
                        className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    />

                    <h2 className="font-oswald text-sm font-bold tracking-wide sm:text-base">
                        FITLOG
                    </h2>
                </div>

                {/* Copyright */}
                <p className="max-w-full text-center font-inter text-[10px] leading-5 text-[#6B7280] sm:text-xs md:max-w-none md:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

