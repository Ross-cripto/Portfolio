import type { MetadataRoute } from "next";
import { profile, sections } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: base, priority: 1 },
    ...sections.map((s) => ({ url: `${base}/${s.key}`, priority: 0.6 })),
    ...sections.flatMap((s) => s.items.filter((i) => !i.ext).map((i) => ({ url: `${base}/${s.key}/${i.slug}`, priority: 0.5 }))),
  ];
}
