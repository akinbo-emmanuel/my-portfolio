import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/Animation/PageTransition";
import StairTransition from "@/components/Animation/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Emmanuel Akinbo | Frontend Engineer & Smart Contract Developer",
  description:
    "Explore the portfolio of Emmanuel Akinbo, a skilled Frontend Engineer specializing in React, Next.js, Tailwind CSS, and TypeScript. Also experienced in Smart Contract development for Ethereum with Solidity and EVM expertise. Discover projects, skills, and case studies in modern web and blockchain development.",
  keywords: [
    "Emmanuel Akinbo",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Smart Contract Developer",
    "Ethereum Developer",
    "Solidity Developer",
    "EVM",
    "Blockchain Developer",
    "Web3",
    "Frontend Development Portfolio",
    "Blockchain Portfolio",
  ],
  authors: [
    { name: "Emmanuel Akinbo", url: "https://emmanuelakinbo.vercel.app" },
  ],
  openGraph: {
    title: "Emmanuel Akinbo | Frontend Engineer & Smart Contract Developer",
    description:
      "Browse the work and expertise of Emmanuel Akinbo in frontend development (React, Next.js, Tailwind CSS) and blockchain (Ethereum, Solidity, EVM).",
    url: "https://emmanuelakinbo.vercel.app",
    type: "website",
    images: [
      {
        url: "https://emmanuelakinbo.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Akinbo Portfolio - Frontend Engineer & Blockchain Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Akinbo | Frontend Engineer & Smart Contract Developer",
    description:
      "Frontend development and blockchain projects by Emmanuel Akinbo, showcasing React, Next.js, Tailwind, Solidity, and EVM skills.",
    images: ["https://emmanuelakinbo.vercel.app/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />

        <StairTransition />
        <PageTransition>{children}</PageTransition>

        <Analytics />
      </body>
    </html>
  );
}
