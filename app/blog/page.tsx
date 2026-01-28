import { fetchBlogPosts } from "./lib/fetchPosts";
import BlogContent from "./BlogContent";

export const metadata = {
  title: "Blog | Cameron Wolf - Honest Thoughts",
  description:
    "Personal accounts on mental health, inner thinkings, and the stuff that doesn't fit in a LinkedIn post.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  return <BlogContent posts={posts} />;
}
