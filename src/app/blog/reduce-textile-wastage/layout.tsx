import React from 'react';

export const metadata = {
  title: "Reduce Production Wastage in Textile Manufacturing | Pinnacle",
  description: "Learn where the textile industry loses fabric, yarn, and time, and how to reduce production wastage with lean methods, better planning, and ERP-led tracking.",
  alternates: {
    canonical: "https://www.pinnaclesystems.co.in/blog/reduce-textile-wastage/",
  },
  openGraph: {
    title: "Reduce Production Wastage in Textile Manufacturing",
    description: "Learn where the textile industry loses fabric, yarn, and time, and how to reduce production wastage with lean methods, better planning, and ERP-led tracking.",
    url: "https://www.pinnaclesystems.co.in/blog/reduce-textile-wastage/",
    images: [
      {
        url: "https://www.pinnaclesystems.co.in/images/blog/Textile manufacturing wastage reduction banner (1)_11zon.webp",
        width: 1200,
        height: 630,
        alt: "Reduce Production Wastage in Textile Manufacturing",
      },
    ],
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
