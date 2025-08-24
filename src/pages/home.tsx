'use client';
import LineShadow from '@/components/ui/lineShadow';
import ShinyText from '@/components/ui/shinyText';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import {
    PopoverForm,
    PopoverFormButton,
    PopoverFormCutOutLeftIcon,
    PopoverFormCutOutRightIcon,
    PopoverFormSeparator,
    PopoverFormSuccess,
} from '@/components/ui/popoverForm';
import { useEffect, useState } from 'react';
import CircularText from '@/components/ui/circularText';
import Magnet from '@/components/ui/magneticEffect';
import { HexagonBackground } from '@/components/ui/hexagonBg';

const World = dynamic(
    () => import('../components/ui/globe').then((m) => m.World),
    {
        ssr: false,
    }
);
export default function Home() {
    const globeConfig = {
        pointSize: 4,
        globeColor: '#062056',
        showAtmosphere: true,
        atmosphereColor: '#FFFFFF',
        atmosphereAltitude: 0.1,
        emissive: '#062056',
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: 'rgba(255,255,255,0.7)',
        ambientLight: '#38bdf8',
        directionalLeftLight: '#ffffff',
        directionalTopLight: '#ffffff',
        pointLight: '#ffffff',
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ['#06b6d4', '#3b82f6', '#6366f1'];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -15.432563,
            startLng: 28.315853,
            endLat: 1.094136,
            endLng: -63.34546,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: -8.833221,
            startLng: 13.264837,
            endLat: -33.936138,
            endLng: 18.436529,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 28.6139,
            endLng: 77.209,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 41.9028,
            startLng: 12.4964,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 14,
            startLat: -33.936138,
            startLng: 18.436529,
            endLat: 21.395643,
            endLng: 39.883798,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];
    return (
        <div className="flex h-full w-full flex-col items-center justify-between space-y-10 px-6 py-14 sm:py-30 md:h-dvh md:px-28 md:py-24">
            <div className="flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center justify-center px-0 text-[var(--primary)] md:w-3/5 md:items-start md:space-y-5">
                    {/* <div className="bg-bay-of-many-600/40 h-fit w-fit rounded-4xl border border-gray-200 px-3 py-1 text-center backdrop-blur-3xl">
                        <ShinyText className="text-md">
                            Veridian Devs. - Your Dev Partner
                        </ShinyText>
                    </div> */}
                    <h1 className="w-full text-center md:text-left text-5xl font-extrabold tracking-wide text-white capitalize md:text-[5vw]">
                        We don't just launch{' '}
                        <LineShadow className="italic" shadowColor={'white'}>
                            sites
                        </LineShadow>
                        , We launch{' '}
                        <LineShadow className="italic" shadowColor="white">
                            legacies.
                        </LineShadow>
                    </h1>
                    <p className="bg-bay-of-many-600/30 w-5/6 p-3 text-center md:text-left text-lg text-neutral-300 md:text-[2vw] lg:w-2/3">
                        A website is an expense. A market-leading digital
                        platform is an investment. We only build the latter.
                    </p>
                    <RequestCallbackButton />
                </div>
                <div className="relative h-full w-full md:w-2/5">
                    <div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden px-4 md:h-[80vh]">
                        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-b from-transparent to-white select-none dark:to-black" /> */}
                        <div className="absolute -top-0 left-0 z-10 h-72 w-full md:h-full md:py-10">
                            <Suspense fallback={<div>Loading...</div>}>
                                <World
                                    data={sampleArcs}
                                    globeConfig={globeConfig}
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Magnet
                padding={50}
                magnetStrength={2}
                disabled={false}
                className="hidden"
            >
                <CircularText
                    text="SCROLL ⁕ DOWN ⁕ SCROLL ⁕ DOWN ⁕ "
                    onHover="speedUp"
                    spinDuration={20}
                    className="hidden h-20 w-2/3 md:block"
                />
            </Magnet> */}
        </div>
    );
}

export function RequestCallbackButton() {
    const [formState, setFormState] = useState<string>('idle');
    const [open, setOpen] = useState(false);
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    function submit() {
        setFormState('loading');
        const text = `Hello Veridian Devs! I would like to request a callback. My name is ${name} and I would like to discuss about ${message}`;
        setTimeout(() => {
            setFormState('success');
            setUrl(
                `https://wa.me/6386665124/?text=${encodeURIComponent(text)}`
            );
        }, 1500);

        setTimeout(() => {
            setOpen(false);
            setFormState('idle');
            setName('');
            setMessage('');
            setUrl('');
        }, 4300);
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key === 'Enter' &&
                open &&
                formState === 'idle'
            ) {
                submit();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, formState]);

    return (
        <div className="flex w-fit items-center justify-center">
            <PopoverForm
                title="Request a Callback"
                open={open}
                setOpen={setOpen}
                width="325px"
                height="225px"
                showCloseButton={formState !== 'success'}
                showSuccess={formState === 'success'}
                openChild={
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (!name || !message) return;
                            submit();
                        }}
                    >
                        <div className="relative flex flex-col space-y-0">
                            <input
                                type="text"
                                autoFocus
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-md border-bay-of-many-600/50 text-bay-of-many-600 placeholder:text-bay-of-many-600/50 w-full resize-none rounded-t-lg border-2 px-3 py-2 outline-none"
                                required
                            />
                            <textarea
                                placeholder={`What would you like to discuss about?\n• Graphic Designing\n• Application Development\n• Web Development`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border-bay-of-many-600/50 text-bay-of-many-600/95 placeholder:text-bay-of-many-600/50 min-h-28 w-full resize-none rounded-b-lg border-x-2 border-b-2 px-3 py-2 text-sm outline-none"
                                required
                            />
                        </div>
                        <div className="relative flex h-12 items-center px-[10px]">
                            <PopoverFormSeparator />
                            <div className="absolute top-0 left-0 -translate-x-[1.5px] -translate-y-1/2">
                                <PopoverFormCutOutLeftIcon />
                            </div>
                            <div className="absolute top-0 right-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                                <PopoverFormCutOutRightIcon />
                            </div>
                            <PopoverFormButton
                                loading={formState === 'loading'}
                                text="Submit"
                            />
                        </div>
                    </form>
                }
                successChild={
                    <PopoverFormSuccess
                        title="Request Received"
                        description="Thank you for connecting with us!"
                        url={url}
                    />
                }
            />
        </div>
    );
}

export function GlobeDemo() {
    return (
        <div className="relative flex h-screen w-full flex-row items-center justify-center bg-white py-20 md:h-auto dark:bg-black"></div>
    );
}
