import { CardSwipe } from "@/components/featuredWorks";


export default function Works() {
    return (
        <div className="h-full w-full space-y-8 bg-[var(--primary)]/10 px-6 py-14 backdrop-blur-xs bg-gradient-to-b from-[var(--secondary)]/60 to-[var(--secondary)]/30 sm:py-30 md:px-28 md:py-20">
            <h2 className="z-0 flex w-fit justify-self-center rounded-4xl border border-[var(--primary)]/50 bg-[var(--secondary)]/90 px-7 py-4 text-center text-3xl font-bold tracking-wider uppercase">
                {'{ '}Works{' }'}
            </h2>
            <div>
                <CardSwipe
                    images={[
                        {
                            src: 'https://images.unsplash.com/photo-1753240810334-5d626bdc26ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            alt: 'Work 1',
                            url: 'https://yaatrika.vercel.app/'
                        },
                        {
                            src: 'https://images.unsplash.com/photo-1747227825543-5da2c9f03222?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            alt: 'Work 2',
                            url: 'https://shiv-am-saxena.vercel.app/'
                        },
                        {
                            src: 'https://images.unsplash.com/photo-1752170337854-09086f036696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            alt: 'Work 3',
                            url: 'https://unionyx.vercel.app/'
                        },
                    ]}
                    slideShadows={true}
                />
            </div>
        </div>
    );
}
