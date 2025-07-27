'use client';
import { CardSwipe } from '@/components/featuredWorks';

export default function Works() {
    return (
        <div className="h-full w-full space-y-8 bg-[var(--primary)]/10 bg-gradient-to-b from-[var(--secondary)]/60 to-[var(--secondary)]/30 px-6 py-14 backdrop-blur-xs sm:py-30 md:px-28 md:py-20">
            <div className="flex flex-col items-center justify-center space-y-8 md:flex-row-reverse md:space-x-8 md:justify-between">
                <div className="flex flex-col items-center justify-center px-0 text-[var(--primary)] md:items-end md:w-1/2">
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
                    <CardSwipe
                        images={[
                            {
                                src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753613172/cld-sample-3.jpg',
                                alt: 'Work 1',
                                url: 'https://yaatrika.vercel.app/',
                            },
                            {
                                src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753613172/cld-sample-2.jpg',
                                alt: 'Work 2',
                                url: 'https://shiv-am-saxena.vercel.app/',
                            },
                            {
                                src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753613171/samples/coffee.jpg',
                                alt: 'Work 3',
                                url: 'https://unionyx.vercel.app/',
                            },
                            {
                                src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753613172/cld-sample-3.jpg',
                                alt: 'Work 4',
                                url: 'https://yaatrika.vercel.app/',
                            },
                            {
                                src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753613172/cld-sample-2.jpg',
                                alt: 'Work 5',
                                url: 'https://shiv-am-saxena.vercel.app/',
                            },
                            {
                                src: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753613171/samples/coffee.jpg',
                                alt: 'Work 6',
                                url: 'https://unionyx.vercel.app/',
                            },
                        ]}
                        slideShadows={false}
                    />
                </div>
            </div>
        </div>
    );
}
