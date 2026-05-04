import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://afzal-hossan.me";

  return [
    {
      url: baseUrl,
      lastModified: "2026-05-04",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
