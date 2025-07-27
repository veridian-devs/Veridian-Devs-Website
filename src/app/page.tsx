'use client';
import React from 'react';
import Home from '@/pages/home';
import Works from '@/pages/works';
import Benifits from '@/pages/benifits';
export default function page(): React.ReactNode {
    return (
        <div className="relative z-0 min-h-max w-full">
            <div className="h-full max-h-screen w-full">
                <Home />
            </div>
            <div className="h-full max-h-full w-full">
                <Works />
            </div>
            <div className="h-full max-h-full w-full">
                <Benifits />
            </div>
            <div className="h-full max-h-full w-full">
                <Works />
            </div>
        </div>
    );
}
