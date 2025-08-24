import type { Metadata } from 'next';
import { Anta } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Footer from '@/pages/footer';
import { HexagonBackground } from '@/components/ui/hexagonBg';

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
                url: './logo.png',
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

function MetaTags() {
    return (
        <Head>
            <meta
                name="description"
                content="Veridian Devs crafts high-performance web applications and custom software solutions to help your business grow and succeed in the digital landscape."
            />
            <meta
                name="keywords"
                content="software development, web development, custom software, next.js development, react developers, mobile apps, SEO, digital transformation, technology consulting, UI/UX design, cloud solutions, enterprise software, startup development, frontend development, backend development"
            />
            <meta
                property="og:title"
                content="Veridian Devs - Innovative Software & Web Development"
            />
            <meta
                property="og:description"
                content="We build custom web and software solutions that drive growth."
            />
            <meta property="og:url" content="https://veridiandevs.tech" />
            <meta property="og:site_name" content="Veridian Devs" />
            <meta property="og:image" content="./logo.png" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="Veridian Devs - Innovative Software & Web Development"
            />
            <meta
                name="twitter:description"
                content="We build custom web and software solutions that drive growth."
            />
            <meta name="twitter:creator" content="@veridiandevs" />
            <meta name="twitter:image" content="/logo.png" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta
                name="google-site-verification"
                content="YOUR_GOOGLE_SITE_VERIFICATION_CODE"
            />
            <meta
                itemProp="name"
                content="Veridian Devs - Innovative Software & Web Development"
            />
            <meta
                itemProp="description"
                content="Veridian Devs crafts high-performance web applications and custom software solutions to help your business grow and succeed in the digital landscape."
            />
            <meta itemProp="image" content="./logo.png" />
            <link rel="preconnect" href="https://res.cloudinary.com" />
            <link rel="canonical" href="https://veridiandevs.tech" />
        </Head>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <MetaTags />
            <body
                className={`${anta.className} from-cod-gray-700 to-cod-gray-950 bg-gradient-to-br antialiased`}
            >
                <Navbar />
                <main className="relative h-full w-full">
                    {/* <div className="fixed inset-0 -z-10 bg-[#403e3c] bg-center bg-no-repeat" /> */}
                    {/* <div className="fixed inset-0 -z-10 bg-[url('https://res.cloudinary.com/dj046hh4m/image/upload/v1753618056/Screenshot_2025-07-27_173634_va845x.png')] bg-cover bg-center bg-no-repeat" /> */}

                    <HexagonBackground className="fixed inset-0 -z-10" />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
