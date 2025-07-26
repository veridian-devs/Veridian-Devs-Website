"use client";
import Navbar from '@/components/navbar';
import WavyBackground from '@/components/ui/background'
import React from 'react'
import Home from '@/pages/home';
export default function page(): React.ReactNode {
	return (
		<main className="relative w-full">
			<div className="fixed inset-0 -z-10">
				<WavyBackground
					waveColor={[0.1176, 0.2274, 0.5411 ]}
					disableAnimation={false}
					enableMouseInteraction={true}
					mouseRadius={0.3}
					colorNum={28.8}
					waveAmplitude={0.7}
					waveFrequency={1.7}
					waveSpeed={0.05}
				/>
			</div>

			{/* This div's purpose is for the scrolling layout effect, so a div is correct. */}
			<div className="relative z-0 min-h-max w-full">
				<Navbar />

				<div className="w-full max-h-screen h-full"><Home/></div>
				<div className="w-full max-h-full h-full"><Works/></div>
				<div className="w-full max-h-full h-full"><Benifits/></div>
				<div className="w-full max-h-full h-full"><Benifits/></div>
				<div className="w-full max-h-full h-full"><Benifits/></div>
				<div className="w-full max-h-full h-full"><Benifits/></div>
			</div>
		</main>
	)
}