'use client';

import { Marquee } from '@/components/featuredWorks';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function Works() {
    const images = [
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753716964/YAATRIKA_b2lzzo.png',
            alt: 'Work 1',
            url: 'https://yaatrika.vercel.app/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753791886/PORTFOLIO_si86bg.jpg',
            alt: 'Work 2',
            url: 'https://shiv-am-saxena.vercel.app/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753716963/UNIONYX_muncwf.png',
            alt: 'Work 3',
            url: 'https://unionyx.vercel.app/',
        },
        {
            src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753791883/OTHER_WORKS_wqx1uv.png',
            alt: 'Other Works',
        },
    ];
    return (
        <div className="h-full w-full space-y-8 bg-gradient-to-b from-[var(--secondary)]/60 to-[var(--secondary)]/30 px-6 py-14 backdrop-blur-xs sm:py-30 md:px-28 md:py-20">
            <div className="flex flex-col items-center justify-center space-y-8 md:flex-row-reverse md:justify-between md:space-x-8">
                <div className="flex flex-col items-center justify-center px-0 text-[var(--primary)] md:w-1/2 md:items-end">
                    <div className="flex gap-2">
                        <div>
                            <h2 className="mb-1 text-center text-4xl font-bold tracking-wide uppercase md:text-left md:text-[8vw]">
                                Works
                            </h2>
                            <p className="text-md flex items-center gap-1 md:text-2xl">
                                Seamless Images carousel animation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative h-full w-full md:w-1/2`}>
                    <Marquee pauseOnHover className="[--duration:10s] rounded-2xl">
                        {images.map((image, idx) => (
                            <div
                                key={idx}
                                className="relative flex h-66 w-1/2 items-center justify-center overflow-hidden rounded-2xl p-5"
                            >
                                <CldImage
                                    src={image.src}
                                    width={350}
                                    height={350}
                                    className="h-full w-full rounded-2xl object-cover"
                                    alt={image.alt}
                                />
                                {image.url && (
                                    <Link
                                        href={image.url}
                                        target="_blank"
                                        className="absolute inset-0 m-5 flex items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-colors duration-300 hover:bg-[var(--primary)]/50"
                                    >
                                        <span className="rounded-lg bg-[var(--primary)]/80 px-3 py-1.5 text-base font-semibold text-[var(--secondary)]/85">
                                            Visit Project
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
