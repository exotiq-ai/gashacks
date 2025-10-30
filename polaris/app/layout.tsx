import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POLARIS | AI-Powered Luxury Real Estate for UHNW",
  description: "Save an average of $1.8M per transaction with POLARIS. AI-powered platform for ultra-high-net-worth real estate transactions. Transparent $30K flat fee, white-glove service.",
  keywords: "UHNW real estate, luxury real estate AI, ultra high net worth properties, Miami luxury homes, Aspen real estate, save on real estate commissions, AI real estate platform",
  authors: [{ name: "Polaris" }],
  openGraph: {
    title: "POLARIS | AI-Powered Luxury Real Estate",
    description: "Save an average of $1.8M per transaction. AI efficiency meets white-glove service for $10M-$100M properties.",
    url: "https://polaris.estate",
    siteName: "Polaris",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Polaris - Find Your True North in Luxury Real Estate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POLARIS | AI-Powered Luxury Real Estate",
    description: "Save an average of $1.8M per transaction with transparent pricing and AI-powered insights.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
