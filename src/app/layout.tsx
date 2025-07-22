import type { Metadata } from "next";
import { Anta } from "next/font/google";
import "./globals.css";

// 2. Configure the font
const anta = Anta({ 
  subsets: ['latin'],
  weight: "400", // Specify weight(s)
});


export const metadata: Metadata = {
  // Set the base URL for all relative URLs within the metadata object
  metadataBase: new URL('https://veridiandevs.tech'),

  // Core metadata
  title: {
    template: '%s | Veridian Devs',
    default: 'Veridian Devs - Innovative Software & Web Development',
  },
  description: 'Veridian Devs crafts high-performance web applications and custom software solutions to help your business grow and succeed in the digital landscape.',

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Veridian Devs - Innovative Software & Web Development',
    description: 'We build custom web and software solutions that drive growth.',
    url: 'https://veridiandevs.tech',
    siteName: 'Veridian Devs',
    images: [
      {
        url: '/logo.png', // Place in 'public' folder
        width: 1200,
        height: 630,
        alt: 'Veridian Devs Logo and Tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Veridian Devs - Innovative Software & Web Development',
    description: 'We build custom web and software solutions that drive growth.',
    // Optional: add your Twitter handle
    creator: '@veridiandevs', 
    images: ['/logo.png'], // Place in 'public' folder
  },

  // Viewport and color scheme
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },

  // Icons
  icons: {
    icon: '/favicon.ico', // Standard favicon
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png', // For Apple devices
  },

  // Optional: SEO keywords
  keywords: ['software development', 'web development', 'custom software', 'next.js development', 'react developers', 'mobile apps'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
