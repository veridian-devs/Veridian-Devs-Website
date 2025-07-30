'use client';
import React from 'react';
import Home from '@/pages/home';
import Works from '@/pages/works';
import Benifits from '@/pages/benifits';
import Team from '@/pages/team';
export default function page(): React.ReactNode {
    return (
        <>
            <div className="h-full max-h-full w-full">
                <Home />
            </div>
            <div className="h-full max-h-full w-full">
                <Works />
            </div> 
            <div className="h-full max-h-full w-full">
                <Benifits />
            </div>
            <div className="h-full max-h-full w-full">
                <Team />
            </div>
        </>
    );
}
