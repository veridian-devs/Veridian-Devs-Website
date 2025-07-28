import type { Metadata } from 'next';
import { Anta } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import WavyBackground from '@/components/ui/background';

// 2. Configure the font
const anta = Anta({
    subsets: ['latin'],
    weight: '400', // Specify weight(s)
});

export const metadata: Metadata = {
    metadataBase: new URL('https://veridiandevs.tech'),
    title: {
        template: '%s | Veridian Devs',
        default: 'Veridian Devs - Innovative Software & Web Development',
    },
    description:
        'Veridian Devs crafts high-performance web applications and custom software solutions to help your business grow and succeed in the digital landscape.',
    openGraph: {
        title: 'Veridian Devs - Innovative Software & Web Development',
        description:
            'We build custom web and software solutions that drive growth.',
        url: 'https://veridiandevs.tech',
        siteName: 'Veridian Devs',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Veridian Devs Logo and Tagline',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Veridian Devs - Innovative Software & Web Development',
        description:
            'We build custom web and software solutions that drive growth.',
        creator: '@veridiandevs',
        images: ['/logo.png'],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    keywords: [
        'software development',
        'web development',
        'custom software',
        'next.js development',
        'react developers',
        'mobile apps',
        'SEO',
        'digital transformation',
        'technology consulting',
        'UI/UX design',
        'cloud solutions',
        'enterprise software',
        'startup development',
        'frontend development',
        'backend development',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${anta.className} antialiased  !w-screen max-w-screen`}>
                <main className="relative w-screen h-full">
                    <div className="fixed inset-0 -z-10 bg-[url('https://res.cloudinary.com/dj046hh4m/image/upload/v1753618056/Screenshot_2025-07-27_173634_va845x.png')] bg-cover bg-center bg-no-repeat"/>

                        <Navbar />
                        {children}
                </main>
            </body>
        </html>
    );
}
