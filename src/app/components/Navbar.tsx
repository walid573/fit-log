'use client'

import Image from 'next/image';
import NavLogo from '../assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const activeStyle =
        "bg-[#1A2312] text-[#C2F800] border outline-none border-transparent px-6 py-2 rounded-full text-xs font-medium";

    const inactiveStyle =
        "bg-transparent text-[#9CA3AF] px-6 py-2 rounded-full text-xs font-medium hover:text-white transition";

    return (
        <section className=' py-7  px-6 flex justify-between items-center gap-40 border-b border-[#222630]'>
            <div className='flex justify-around gap-2.5 items-center'>
                <Link href='/'><Image src={NavLogo} alt='Logo' width={28} height={28}></Image>
                </Link>
                <Link href='/'><h2 className='font-oswald font-semibold text-[18px]'>FITLOG</h2></Link>
            </div>
            <div className="flex items-center gap-2">
                <Link
                    href="/"
                    className={pathname === "/" ? activeStyle : inactiveStyle}
                >
                    Workouts
                </Link>

                <Link
                    href="/my-plan"
                    className={pathname === "/my-plan" ? activeStyle : inactiveStyle}
                >
                    My Plan
                </Link>
            </div>
            <div className='flex justify-around items-center gap-3'>
                <Link href='/my-plan' className='font-inter text-[#D1D5DB] text-[12px]'>Plan  <span className='text-black rounded-full bg-[#C2F800] px-2 py-1 ml-1'>0</span></Link>
                <Link href='/my-plan' className='font-inter text-[#D1D5DB] text-[12px]'>Saved <span className='text-white border border-[#9CA3AF]/60 rounded-full bg-transparent px-2 py-1 ml-1'>0</span></Link>
            </div>
        </section>
    );
};

export default Navbar;