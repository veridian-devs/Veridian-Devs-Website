"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion
import GlassSurface from './ui/glass'; // Adjust the import path to your GlassSurface component

// SVG Icon for the menu (hamburger)
const MenuIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

// SVG Icon for the close button (X)
const CloseIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Updated navLinks for the mobile menu
    const navLinks = [
        { href: "/services", label: "Services" },
        { href: "/benefits", label: "Benefits" },
        { href: "/comparison", label: "Comparison" },
    ];

    return (
        <header className="pointer-events-auto sticky top-5 z-50 flex justify-center w-full px-4">
            <div className="w-full md:max-w-7xl">
                <GlassSurface
                    width={'100%'}
                    borderRadius={50}
                    displace={2}
                    distortionScale={-180}
                    redOffset={5}
                    greenOffset={15}
                    blueOffset={25}
                    brightness={60}
                    opacity={0.1}
                    mixBlendMode="luminosity"
                    blur={20}
                    saturation={1}
                    borderWidth={5}
                    className='border border-white/30'
                >
                    <div className="w-full flex items-center justify-between px-2 md:px-6">
                        {/* Logo / Brand Name */}
                        <Link
                            className='text-white md:hidden block text-xl uppercase tracking-[3px] font-bold'
                            href={'/'}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Veridian Devs
                        </Link>

                        {/* Desktop Navigation - Updated */}
                        <nav className="hidden w-full md:flex items-center justify-between space-x-8">
                            <Link
                                className='text-white text-xl uppercase tracking-[3px] font-bold'
                                href={'/'}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Veridian Devs
                            </Link>
                            <div className='text-white text-md flex items-center space-x-8'>
                                <Link href={'/services'} className='text-[var(--primary)] hover:-translate-y-1 transition-all duration-300'>Services</Link>
                                <Link href={'/benefits'} className='text-[var(--primary)] hover:-translate-y-1 transition-all duration-300'>Benefits</Link>
                                <Link href={'/comparison'} className='text-[var(--primary)] hover:-translate-y-1 transition-all duration-300'>Comparison</Link>
                            </div>
                            <Link className='text-[#242d8c] hidden lg:block md text-lg font-regular bg-[var(--primary)] hover:border hover:border-[var(--primary)] px-3 py-1.5 rounded-full hover:bg-transparent hover:text-white transition-all duration-500' href={'/book-a-call'}>
                                Chat Now
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        {/* Mobile Menu Button with Animation */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white focus:outline-none relative h-7 w-7"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.div
                                        key={isMenuOpen ? "close" : "menu"}
                                        initial={{ opacity: 0, rotateY: 90 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: -90 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="absolute inset-0 mt-0.5"
                                    >
                                        {isMenuOpen ? (
                                            <CloseIcon className="size-7" />
                                        ) : (
                                            <MenuIcon className="size-7" />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </GlassSurface>


                {/* Mobile Dropdown Menu with Animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden mt-2 h-50"
                            initial={{ opacity: 0, y: -20 }} // Start invisible and slightly above
                            animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and in position
                            exit={{ opacity: 0, y: -20 }}    // Animate out to invisible and slightly above
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <GlassSurface
                                width={'100%'}
                                height={275}
                                borderRadius={30}
                                displace={2}
                                blur={15}
                                backgroundOpacity={0.2}
                                className='border border-white/20'
                            >
                                <nav className="flex flex-col items-center space-y-4 pb-4 w-full">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-white/90 hover:text-white text-lg w-full text-center py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="pt-4">
                                        <Link className='text-[#242d8c] text-lg font-semibold bg-[#F1EAD8] px-5 py-3 rounded-full border-[#F1EAD8] border' href={'/book-a-call'}>
                                            Book a call &rarr;
                                        </Link>
                                    </div>
                                </nav>
                            </GlassSurface>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
