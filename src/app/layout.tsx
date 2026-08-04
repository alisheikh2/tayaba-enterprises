import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import SchemaData from "@/components/SchemaData";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tayaba-enterprises.com'),
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
  openGraph: {
    title: "Tayaba Enterprises | Copier Solution Karachi Since 2003",
    description: "Enterprise photocopier rentals, machine sales & high-volume digital printing solutions in Karachi, Pakistan.",
    url: "https://tayaba-enterprises.com",
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
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-slate-50 text-gray-800">
        <SchemaData />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingSocial />
        <Footer />
      </body>
    </html>
  );
}
