import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Emmanuel Akinbo about senior frontend engineering opportunities, product development, and collaborations.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
