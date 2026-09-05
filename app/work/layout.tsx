import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected frontend products and engineering projects built by Emmanuel Akinbo using React, Next.js, TypeScript, and modern web technologies.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
