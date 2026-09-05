import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frontend engineering services spanning accessible interfaces, scalable React and Next.js applications, and Web3 integrations.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
