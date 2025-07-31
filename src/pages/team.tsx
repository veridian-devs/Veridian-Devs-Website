import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TeamCard from '@/components/ui/card';
import { Autoplay } from 'swiper/modules';

export default function Team() {
    const teamMembers = [
        {
            name: `Akash Singh`,
            title: `(Co-Founder)(CEO)`,
            role: 'Associate Software Engineer',
            img: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753885407/Akash_kauzts.jpg',
            platform: {
                instagram: 'https://instagram.com/akashsingh_2003',
                twitter: 'https://x.com/akashsingh_2003',
                linkedin: 'https://www.linkedin.com/in/akash-singh-2003/',
            },
        },
        {
            name: 'Shivam Saxena',
            title: '(Co-Founder)(CTO)',
            role: 'Full-Stack Developer',
            img: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753885410/Shivam_cvwk5g.jpg',
            platform: {
                instagram: 'https://instagram.com/shiv_am_saxena',
                twitter: 'https://x.com/shiv_am_saxena',
                linkedin: 'https://www.linkedin.com/in/shiv-am-saxena/',
            },
        },
        {
            name: 'Vinayak Mehrotra',
            title: '(Co-Founder)(Managing Director)',
            role: 'Associate Software Engineer',
            img: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753885407/Vinayak_svp2gu.jpg',
            platform: {
                instagram: 'https://instagram.com/vinayakmehrotra_',
                twitter: 'https://x.com/vinayakmehrotra_',
                linkedin: 'https://www.linkedin.com/in/vinayak-mehrotra-2003/',
            },
        },
        {
            name: 'Ritesh Patel',
            title: '(VP of Enggineering)',
            role: 'UI/UX Designer',
            img: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753885407/Ritesh_kzvcej.jpg',
            platform: {
                instagram: 'https://instagram.com/riteshpatel_2003',
                twitter: 'https://x.com/riteshpatel_2003',
                linkedin: 'https://www.linkedin.com/in/ritesh-patel-2003/',
            },
        },
        {
            name: 'Divyansh Singh',
            title: '(Project Manager)',
            role: 'Architect & Designer',
            img: 'https://res.cloudinary.com/dj046hh4m/image/upload/v1753887344/Divyansh_hmlal9.jpg',
            platform: {
                instagram: 'https://instagram.com/divyansh_singh_2003',
                twitter: 'https://x.com/divyansh_singh_2003',
                linkedin: 'https://www.linkedin.com/in/divyansh-singh-2003/',
            },
        },
    ];

    return (
        <div className="h-full w-full space-y-8 bg-gradient-to-b from-[var(--secondary)]/60 to-[var(--secondary)]/30 px-6 py-14 backdrop-blur-xs sm:py-30 md:px-28 md:py-20">
            <div className="flex flex-col items-center justify-between space-y-8 md:flex-row-reverse md:justify-between md:space-x-8">
                <div className="flex flex-col items-center justify-center space-y-4 px-0 text-[var(--primary)] md:w-1/2 md:items-end md:space-x-10">
                    <div className="flex gap-2">
                        <div className="text-right">
                            <h2 className="mb-1 text-center text-4xl font-bold tracking-wide uppercase md:text-right md:text-[8vw]">
                                The Team
                            </h2>
                            <p className="text-md flex items-center gap-1 text-center md:text-right md:text-xl">
                                Meet our highly skilled team dedicated to
                                delivering exceptional results for our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative h-full w-full md:w-1/2`}>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        grabCursor={false}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className=" w-full md:w-1/2 p-5"
                        spaceBetween={0}
                    >
                        {teamMembers.map((member, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="relative flex h-66 w-1/2 items-center justify-center overflow-hidden rounded-2xl p-5"
                            >
                                <TeamCard
                                    name={member.name}
                                    role={member.role}
                                    img={member.img}
                                    title={member.title}
                                    platform={member.platform}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
