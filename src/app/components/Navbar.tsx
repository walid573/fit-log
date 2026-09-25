'use client';

import Image from 'next/image';
import NavLogo from '../assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePlan } from '../contexts/PlanContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { plan, saved } = usePlan();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const exercises = plan.length;
  const savedItems = saved.length;

  const activeStyle =
    'bg-[#1A2312] text-[#C2F800] border border-transparent px-4 py-2 rounded-full text-xs font-medium';

  const inactiveStyle =
    'text-[#9CA3AF] px-4 py-2 rounded-full text-xs font-medium hover:text-white transition';

  return (
    <nav className="w-full border-b border-[#222630] bg-[#090A0D] px-4 sm:px-6 lg:px-10 py-5">
      <div className="flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2.5">
          <Image src={NavLogo} alt="Logo" width={28} height={28} />
          <h2 className="font-oswald text-lg font-semibold text-white">FITLOG</h2>
        </Link>


        <div className="hidden lg:flex items-center gap-3">
          <Link href="/" className={pathname === '/' ? activeStyle : inactiveStyle}>
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={pathname === '/my-plan' ? activeStyle : inactiveStyle}
          >
            My Plan
          </Link>
        </div>


        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/my-plan?tab=plan"
            className="flex items-center gap-2 text-xs text-[#D1D5DB]"
          >
            Plan
            <span className="rounded-full bg-[#C2F800] px-2 py-1 text-[11px] font-bold text-black">
              {exercises}
            </span>
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-2 text-xs text-[#D1D5DB]"
          >
            Saved
            <span className="rounded-full border border-[#9CA3AF]/60 px-2 py-1 text-[11px] text-white">
              {savedItems}
            </span>
          </Link>
        </div>

 
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>


      {isOpen && (
        <div className="lg:hidden mt-5 rounded-2xl border border-[#222630] bg-[#11161A] p-4">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={pathname === '/' ? activeStyle : inactiveStyle}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className={pathname === '/my-plan' ? activeStyle : inactiveStyle}
            >
              My Plan
            </Link>
          </div>

          <div className="mt-5 border-t border-[#222630] pt-4 flex justify-between">
            <Link
              href="/my-plan?tab=plan"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm text-[#D1D5DB]"
            >
              Plan
              <span className="rounded-full bg-[#C2F800] px-2 py-1 text-[11px] font-bold text-black">
                {exercises}
              </span>
            </Link>

            <Link
              href="/my-plan?tab=saved"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm text-[#D1D5DB]"
            >
              Saved
              <span className="rounded-full border border-[#9CA3AF]/60 px-2 py-1 text-[11px] text-white">
                {savedItems}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;