import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const pages = [
  { path: "", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/resume", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
