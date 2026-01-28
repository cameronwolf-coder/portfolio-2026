import MediaContent from "./MediaContent";
import { fetchYouTubeVideos } from "./lib/fetchVideos";

export const metadata = {
  title: "Media | Cameron Wolf - Wolf Bros Media",
  description:
    "Visual storytelling through Wolf Bros Media. YouTube content and Instagram highlights.",
};

export default async function MediaPage() {
  const videos = await fetchYouTubeVideos();
  return <MediaContent videos={videos} />;
}
