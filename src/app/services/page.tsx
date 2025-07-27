import React from 'react';

export default function page() {
    return (
        <div className="h-full w-full overflow-hidden">
            <div className="h-full w-full space-y-8 bg-[var(--primary)]/10 bg-gradient-to-b from-[var(--secondary)]/60 to-[var(--secondary)]/30 px-6 py-14 backdrop-blur-xs sm:py-30 md:px-28 md:py-20">
                <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-8">
                    <div className="flex flex-col items-center justify-center px-0 text-[var(--primary)] md:items-start">
                        <div className="flex gap-2">
                            <div>
                                <h2 className="text-center text-4xl mb-1 md:text-[8vw] font-bold tracking-wide uppercase md:text-left">
                                    Works
                                </h2>
                                <p className="flex items-center text-md md:text-2xl gap-1">
                                    Seamless Images carousel animation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`h-full w-full md:w-1/2 pt-5`}>
                        {/* CardSwipe component will be used here */}
                    </div>
                </div>
            </div>
        </div>
    );
}
