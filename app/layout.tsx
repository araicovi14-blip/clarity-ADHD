import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clarity ADHD — Virtual ADHD Assessments in BC",
  description:
    "Private virtual ADHD clinic in BC. No referral, no waitlist. Assessments for children, youth, and adults available within a week.",
  metadataBase: new URL("https://clarityadhd.ca"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-[#FAFAF8] text-[#1A1A1A] antialiased">
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
