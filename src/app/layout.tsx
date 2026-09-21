import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Script from "next/script";
import DemoModal from "@/components/shared/DemoModal";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pinnaclesystems.co.in'),
  title: "Pinnacle Systems",
  description: "The Beauty Behind IT Services",
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-white`}>
        {children}
        <React.Suspense fallback={null}>
          <DemoModal />
        </React.Suspense>
      </body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9BZQ899W81"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9BZQ899W81');
          `}
        </Script>
    </html>
  );
}
