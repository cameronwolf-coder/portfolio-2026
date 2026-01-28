import { XMLParser } from "fast-xml-parser";
import type { BlogPost } from "./types";

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("https://camwolfatx.substack.com/feed", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const feed = parser.parse(xml);

    const items = feed?.rss?.channel?.item;
    if (!items) return [];

    const entries = Array.isArray(items) ? items : [items];

    return entries.map((item: Record<string, unknown>) => {
      // Extract thumbnail from enclosure or media:content
      let thumbnailUrl: string | null = null;
      const enclosure = item.enclosure as Record<string, string> | undefined;
      if (enclosure?.["@_url"]) {
        thumbnailUrl = enclosure["@_url"];
      }

      // Strip HTML tags from description for excerpt
      const rawDesc = (item.description as string) || "";
      const plainText = rawDesc.replace(/<[^>]*>/g, "").trim();

      return {
        title: (item.title as string) || "",
        description: plainText.slice(0, 200) + (plainText.length > 200 ? "..." : ""),
        link: (item.link as string) || "",
        pubDate: (item.pubDate as string) || "",
        thumbnailUrl,
      };
    });
  } catch {
    return [];
  }
}
