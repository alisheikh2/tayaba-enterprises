import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import SchemaData from "@/components/SchemaData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tayaba-enterprises.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tayaba Enterprises | Photocopier Machine Sales, Rental & Printing Solutions Karachi",
  description: "Established in 2003, Tayaba Enterprises is Karachi's trusted partner for photocopier machine sales, rentals, digital printing, scanning, typing, laminating, and fax services.",
  keywords: [
    "photocopier machine rental Karachi",
    "printing solutions DHA Karachi",
    "Canon Konica Ricoh photocopier sales Pakistan",
    "heavy duty photocopier machine Karachi",
    "Tayaba Enterprises Karachi",
    "document scanning services Karachi",
    "laminating typing services DHA Phase 7"
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Tayaba Enterprises | Copier Solution Karachi Since 2003",
    description: "Enterprise photocopier rentals, machine sales & high-volume digital printing solutions in Karachi, Pakistan.",
    url: siteUrl,
    siteName: "Tayaba Enterprises",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Tayaba Enterprises Logo",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.className} antialiased flex flex-col min-h-screen bg-slate-50 text-gray-800`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-brand-navy focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <SchemaData />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <FloatingSocial />
        <Footer />
      </body>
    </html>
  );
}
