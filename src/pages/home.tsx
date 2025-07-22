import LineShadow from '@/components/ui/lineShadow'
import ShinyText from '@/components/ui/shinyText'
import React from 'react'

export default function Home() {
    return (
        <div className='h-full w-full py-30 md:py-20 px-5 flex flex-col items-center space-y-8'>
            <div className="w-fit h-fit px-4 py-1 rounded-4xl text-center bg-[var(--secondary)]/40 backdrop-blur-3xl border border-gray-200">
                <ShinyText className='text-md'>Veridian Devs. - Your Dev Partner</ShinyText>
            </div>
            <h1 className='w-full capitalize text-center font-extrabold text-4xl tracking-wide md:text-7xl'>We don't just launch <LineShadow className="italic" shadowColor={'white'}>
                sites
            </LineShadow>, <br /> We launch <LineShadow className='italic' shadowColor='white'>legacies.</LineShadow></h1>
            <p className='w-full md:w-1/3 text-center text-lg p-3 backdrop-blur-md rounded-2xl bg-[var(--secondary)]/30 border border-neutral-300/60 text-neutral-300'>A website is an expense. A market-leading digital platform is an investment. We only build the latter.</p>
        </div>
    )
}
