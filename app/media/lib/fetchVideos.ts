import { XMLParser } from "fast-xml-parser";
import type { YouTubeVideo } from "./types";

const CHANNEL_ID = "UCoWcG4pxRrvc4J27Ew9lTUw";

export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const feed = parser.parse(xml);

    const entries = feed?.feed?.entry;
    if (!entries) return [];

    const items = Array.isArray(entries) ? entries : [entries];

    return items.map((entry: Record<string, unknown>) => {
      const videoId = (entry["yt:videoId"] as string) || "";
      const mediaGroup = entry["media:group"] as Record<string, unknown> | undefined;
      const mediaThumbnail = mediaGroup?.["media:thumbnail"] as Record<string, string> | undefined;

      return {
        id: videoId,
        title: (entry.title as string) || "",
        pubDate: (entry.published as string) || "",
        thumbnailUrl:
          mediaThumbnail?.["@_url"] ||
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        link: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch {
    return [];
  }
}
