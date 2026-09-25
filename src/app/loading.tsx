const Loading = () => {
  return (
    <main className="min-h-screen bg-[#000000] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#232732]" />

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#C2F800] animate-spin" />
        </div>

        <div className="text-center">
          <h2 className="font-oswald text-xl font-bold">
            FITLOG
          </h2>

          <p className="text-[#8A92A0] text-xs mt-1">
            Loading workouts...
          </p>
        </div>

      </div>
    </main>
  );
};

export default Loading;