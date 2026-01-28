import { fetchBlogPosts } from "./lib/fetchPosts";
import BlogContent from "./BlogContent";

export const metadata = {
  title: "Blog | Cameron Wolf - Growth Systems & MarTech Insights",
  description:
    "Deep dives into MarTech infrastructure, growth engineering, and the systems that drive acquisition-ready scale.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  return <BlogContent posts={posts} />;
}
