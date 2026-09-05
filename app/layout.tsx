import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/Animation/PageTransition";
import { siteConfig } from "@/config/site";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Emmanuel Akinbo",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
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
    { name: siteConfig.name, url: siteConfig.url },
  ],
  creator: siteConfig.name,
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description:
      "Senior frontend engineering work by Emmanuel Akinbo, focused on scalable React and Next.js products, accessible interfaces, and reliable user experiences.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Akinbo — Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Senior frontend engineering work focused on scalable React and Next.js products, accessible interfaces, and reliable user experiences.",
    images: ["/twitter-image.jpg"],
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
