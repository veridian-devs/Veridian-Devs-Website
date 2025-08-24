'use client';

export default function Benifits() {
    return (
        <div className="h-full w-full space-y-8 bg-gradient-to-b from-[var(--secondary)]/30 to-[var(--secondary)]/30 px-6 py-14 backdrop-blur-xs sm:py-30 md:px-28 md:py-20">
            <div className="relative flex flex-col items-center justify-center space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-8">
                <div className="sticky top-24 flex flex-col items-center justify-center px-0 text-white md:top-2/5 md:w-1/2 md:-translate-y-0 md:items-start">
                    <div className="flex gap-2">
                        <div>
                            <h2 className="mb-1 text-center text-4xl font-bold tracking-wide uppercase md:text-left md:text-[7vw]">
                                Benefits
                            </h2>
                            <p className="text-md flex items-center gap-1 md:text-2xl">
                                This could be you &rarr;{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-full w-full flex-col items-start justify-start gap-10 md:w-1/2 md:gap-60">
                    {/* <!-- Card stack container --> */}
                    <StickyCards />
                    <StickyCards />
                    <StickyCards />
                    <StickyCards />
                </div>
            </div>
        </div>
    );
}

const StickyCards = () => {
    return (
        <div className="sticky top-44 flex h-60 w-full flex-col items-center justify-center rounded-xl overflow-hidden md:top-2/5 md:h-40 md:flex-row">
            <div className="h-full w-full rounded-t-xl bg-green-500/75 px-3 py-2 backdrop-blur-md md:w-1/2 md:rounded-t-none md:rounded-l-xl">
                With Veridians &rarr;
            </div>
            <div className="h-full w-full rounded-b-xl bg-red-500/75 px-3 py-2 backdrop-blur-md md:w-1/2 md:rounded-b-none md:rounded-br-xl md:rounded-tr-xl ">
                Without Veridians &rarr;{' '}
            </div>
        </div>
    );
};
