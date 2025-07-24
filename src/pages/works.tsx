import LineShadow from '@/components/ui/lineShadow'
import ShinyText from '@/components/ui/shinyText'
import ScrollTriggered from '@/components/workShow'
import React from 'react'

export default function Works() {
    return (
        <div className='h-[100vh] w-full py-14 sm:py-30 md:py-20 px-6 md:px-28 backdrop-blur-xs space-y-8 bg-[var(--primary)]/10'>
            <h2 className='text-center sticky top-24 z-0 w-fit flex justify-self-center text-3xl font-bold uppercase tracking-wider py-4 px-7 rounded-4xl bg-[var(--secondary)]/90 border border-[var(--primary)]/50'>{"{ "}Works{" }"}</h2>

            {/* <ScrollTriggered /> */}
        </div>
    )
}
