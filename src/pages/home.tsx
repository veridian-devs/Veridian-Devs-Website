import LineShadow from '@/components/ui/lineShadow'
import ShinyText from '@/components/ui/shinyText'
import React from 'react'

export default function Home() {
    return (
        <div className='h-full w-full py-30 md:py-20 px-5 flex flex-col items-center space-y-8'>
            <div className="w-fit h-fit px-4 py-1 rounded-4xl bg-[var(--secondary)]/40 backdrop-blur-3xl border border-gray-200">
                <ShinyText className='text-md'>Veridian Devs. - Your Dev Partner</ShinyText>
            </div>
            <h1 className='capitalize text-center font-extrabold text-4xl md:text-7xl'>We don't just develop <LineShadow className="italic" shadowColor={'white'}>
                Websites
            </LineShadow>, <br /> We build <LineShadow className='italic' shadowColor='white'>market</LineShadow> <LineShadow className='italic' shadowColor='white'>leaders.</LineShadow> </h1>
        </div>
    )
}
