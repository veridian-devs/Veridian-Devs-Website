'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

interface CarouselProps {
    images: { src: string; alt: string, url: string }[];
    autoplayDelay?: number;
    slideShadows: boolean;
}

export const CardSwipe: React.FC<CarouselProps> = ({
    images,
    autoplayDelay = 1500,
    slideShadows = false,
}) => {
    const css = `
  .swiper {
    width: 50%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  `;
    return (
        <section className="w-ace-y-4">
            <style>{css}</style>
            <div className="flex w-full items-center justify-center gap-4">
                <div className="w-full md:w-1/2">
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
                        modules={[
                            EffectCards,
                            Autoplay,
                            Pagination,
                            Navigation,
                        ]}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="size-full rounded-3xl">
                                    <Image
                                        src={image.src}
                                        width={500}
                                        height={500}
                                        className="size-full rounded-xl"
                                        alt={image.alt}
                                    />
                                    <Link
                                        href={image.url}
                                        target="_blank"
                                        className="absolute inset-0 flex items-center justify-center rounded-xl bg-[var(--primary)]/30 transition-colors duration-300 hover:bg-[var(--primary)]/50"
                                    >
                                        <span className="rounded-lg bg-[var(--primary)]/80 px-4 py-2 text-lg font-semibold text-[var(--secondary)]/85">
                                            Visit Project
                                        </span>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="size-full rounded-3xl">
                                    <Image
                                        src={image.src}
                                        width={200}
                                        height={200}
                                        className="size-full rounded-xl"
                                        alt={image.alt}
                                    />
                                    <Link
                                        href={image.url}
                                        target="_blank"
                                        className="absolute inset-0 flex items-center justify-center rounded-xl bg-[var(--primary)]/30 transition-colors duration-300 hover:bg-[var(--primary)]/50"
                                    >
                                        <span className="rounded-lg bg-[var(--primary)]/80 px-4 py-2 text-lg font-semibold text-[var(--secondary)]/85">
                                            Visit Project
                                        </span>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
