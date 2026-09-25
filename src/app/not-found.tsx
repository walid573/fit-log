import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0E1117] text-white flex flex-col font-sans select-none selection:bg-[#CCFF00] selection:text-black">

           <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden py-16 my-auto">
  
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#CCFF00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-[#1E2330] mb-2 select-none">
          404
        </h1>


        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 max-w-xl">
          Route Not Found. Log Back In.
        </h2>


        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8 font-medium leading-relaxed">
          The workout routine or page you are trying to access doesn't exist or has been moved out of the library.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#CCFF00] text-black font-extrabold uppercase text-xs tracking-widest px-8 py-3 rounded-sm hover:bg-[#b5e000] transition-colors duration-200 shadow-lg shadow-[#CCFF00]/10"
        >
          Browse Workouts
        </Link>
      </main>


    
    </div>
  );
}