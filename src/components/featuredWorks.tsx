'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

interface CarouselProps {
    images: { src: string; alt: string; url: string }[];
    autoplayDelay?: number;
    slideShadows?: boolean;
}
export default function FeaturedWorks({
    images,
    autoplayDelay = 1500,
    slideShadows = false,
}: CarouselProps) {
    return (
        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md overflow-x-auto px-2 sm:px-4 md:px-5">
            <Swiper
            autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
            }}
            effect={'cards'}
            grabCursor={false}
            loop={true}
            slidesPerView={'auto'}
            rewind={true}
            cardsEffect={{
                slideShadows: slideShadows,
            }}
            modules={[EffectCards, Autoplay, Pagination, Navigation]}
            className="w-full"
            >
            {images.map((image, index) => (
                <SwiperSlide
                key={index}
                className="flex items-center justify-center"
                >
                <div className="relative flex h-64 w-full sm:h-80 md:h-96 items-center justify-center overflow-hidden rounded-2xl p-2 sm:p-4 md:p-5">
                    <CldImage
                    src={image.src}
                    width={350}
                    height={350}
                    className="h-full w-full rounded-sm object-cover"
                    alt={image.alt}
                    />
                    <Link
                    href={image.url}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-colors duration-300 hover:bg-[var(--primary)]/50"
                    >
                    <span className="rounded-lg bg-[var(--primary)]/80 px-3 py-1.5 text-base font-semibold text-[var(--secondary)]/85">
                        Visit Project
                    </span>
                    </Link>
                </div>
                </SwiperSlide>
            ))}
            {images.map((image, index) => (
                <SwiperSlide
                key={index}
                className="flex !w-full items-center justify-center"
                >
                <div className="relative flex h-64 w-full sm:h-80 md:h-96 items-center justify-center overflow-hidden rounded-2xl p-2 sm:p-4 md:p-5">
                    <CldImage
                    src={image.src}
                    width={350}
                    height={350}
                    className="h-full w-full rounded-sm object-cover"
                    alt={image.alt}
                    />
                    <Link
                    href={image.url}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center rounded-xl bg-[var(--primary)]/30 transition-colors duration-300 hover:bg-[var(--primary)]/50"
                    >
                    <span className="rounded-lg bg-[var(--primary)]/80 px-3 py-1.5 text-base font-semibold text-[var(--secondary)]/85">
                        Visit Project
                    </span>
                    </Link>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}
