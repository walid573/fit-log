import React from 'react';

const loading = () => {
    return (
        <main className="px-6 lg:px-12 mt-10">
            <div className="flex items-center justify-center py-32">
                <p className="text-lg font-semibold text-[#C2F800] animate-pulse">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
};

export default loading;