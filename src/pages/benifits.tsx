'use client';
interface CardContent {
    adv: {
        title: string;
        desc: string;
    };
    disadv: {
        title: string;
        desc: string;
    };
};
export default function Benifits() {
    const cardsContent:CardContent[] = [{
        adv: {
            title: "Expert Developer and Designer.",
            desc: "Experience and expertise at your fingertips, ensuring exceptional design quality."
        },
        disadv: {
            title: "Junior Developer and Designer.",
            desc: "Limited experience may lead to subpar design quality and potential project delays."
        }
    },
    {
        adv: {
            title: "Cost-Effective Solutions.",
            desc: "Affordable services without compromising on quality, maximizing your budget."
        },
        disadv: {
            title: "Higher Costs.",
            desc: "Hiring less experienced developers may lead to increased costs due to inefficiencies and potential rework."
        }
    },
    {
        adv: {
            title: "Timely Delivery.",
            desc: "Projects completed on schedule, ensuring you meet your deadlines."
        },
        disadv: {
            title: "Potential Delays.",
            desc: "Inexperienced developers may struggle with time management, leading to project delays."
        }
    },
    {
        adv: {
            title: "Innovative Solutions.",
            desc: "Creative approaches to problem-solving, delivering unique and effective solutions."
        },
        disadv: {
            title: "Conventional Approaches.",
            desc: "Less experienced developers may rely on standard methods, limiting innovation and creativity."
        }
    },
    {
        adv: {
            title: "Comprehensive Support.",
            desc: "Ongoing support and maintenance to ensure your project remains successful."
        },
        disadv: {
            title: "Limited Support.",
            desc: "Junior developers may not provide adequate post-launch support, risking project sustainability."
        }
    },
    {
        adv: {
            title: "Updates every 24-Hours.",
            desc: "Stay informed with daily updates on project progress and milestones."
        },
        disadv: {
            title: "Infrequent Updates.",
            desc: "Less experienced developers may not provide regular updates, leaving you in the dark about project status."
        }
    }];
    return (
        <div className="h-full w-full space-y-8 bg-gradient-to-b from-[var(--secondary)]/30 to-[var(--secondary)]/30 px-6 py-14 backdrop-blur-xs sm:py-30 md:px-28 md:py-20">
            <div className="relative flex flex-col items-center justify-center space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-8">
                <div className="sticky top-24 flex flex-col items-center justify-center px-0 text-white md:top-2/5 md:w-1/2 md:-translate-y-0 md:items-start">
                    <div className="flex gap-2">
                        <div>
                            <h2 className="mb-1 text-center text-4xl font-bold tracking-wide uppercase md:text-left md:text-[7vw]">
                                Benefits
                            </h2>
                            <p className="text-md flex items-center gap-1 md:text-2xl">
                                This could be you &rarr;{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-full w-full flex-col items-start justify-start gap-10 md:w-1/2 md:gap-60">
                    {/* <!-- Card stack container --> */}
                    {cardsContent.map((content, index) => (
                        <StickyCards key={index} adv={content.adv} disadv={content.disadv} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const StickyCards = ({adv, disadv}:CardContent) => {
    return (
        <div className="sticky top-44 flex h-fit w-full flex-col items-center justify-center rounded-xl overflow-hidden md:top-2/5 md:h-48 md:flex-row">
            <div className="h-full w-full rounded-t-xl bg-green-500/10 border border-green-500 px-3 py-1 pb-4 backdrop-blur-3xl md:w-1/2 md:rounded-r-none md:rounded-l-xl">
                <span className="rounded-br-sm bg-green-500/75 px-3 py-2 -ml-3">With Veridians &rarr;</span><br />
                <h5 className="mt-4 text-lg text-cod-gray-100">• {adv.title}</h5>
                <p className="text-sm mt-2 text-white/75">{adv.desc}</p>
            </div>
            <div className="h-full w-full rounded-b-xl bg-red-500/10 border border-red-500/75 px-3 py-1.5 pb-4 backdrop-blur-3xl md:w-1/2 md:rounded-l-none md:rounded-r-xl">
                <span className="rounded-br-sm bg-red-500/75 px-3 py-2 -ml-3">With Veridians &rarr;</span><br />
                <h5 className="mt-4 text-lg text-cod-gray-100">• {disadv.title}</h5>
                <p className="text-sm text-white/75 mt-2">{disadv.desc}</p>
            </div>
        </div>
    );
};
