import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/Animation/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isDark = savedTheme ? savedTheme === "dark" : prefersDark;
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    } catch (_) {}
  })();
`;

export const metadata: Metadata = {
  title: "Emmanuel Akinbo | Senior Frontend Engineer",
  description:
    "Portfolio of Emmanuel Akinbo, a Senior Frontend Engineer specializing in React, Next.js, TypeScript, accessible interfaces, and scalable web products, with additional experience in Web3 integrations.",
  keywords: [
    "Emmanuel Akinbo",
    "Senior Frontend Engineer",
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
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Emmanuel Akinbo | Senior Frontend Engineer",
    description:
      "Senior frontend engineering work by Emmanuel Akinbo, focused on scalable React and Next.js products, accessible interfaces, and reliable user experiences.",
    url: "https://emmanuelakinbo.vercel.app",
    type: "website",
    images: [
      {
        url: "https://emmanuelakinbo.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Akinbo — Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Akinbo | Senior Frontend Engineer",
    description:
      "Senior frontend engineering work focused on scalable React and Next.js products, accessible interfaces, and reliable user experiences.",
    images: ["https://emmanuelakinbo.vercel.app/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f863488f-bd03-4a39-889e-360760459730"
        ></script>
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>

        <Analytics />
      </body>
    </html>
  );
}
