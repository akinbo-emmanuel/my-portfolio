import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Explore Emmanuel Akinbo's frontend engineering experience, education, technical skills, and professional background.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
