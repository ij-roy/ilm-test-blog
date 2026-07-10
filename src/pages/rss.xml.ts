import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPublishedPosts } from "../template/posts";

export const GET: APIRoute = async (context) => {
  const posts = await getPublishedPosts();

  return rss({
    title: "Ilm Blog",
    description: "A user-owned Ilm blog",
    site: context.site || "https://example.com",
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(),
      link: `/blogs/${post.slug}/`
    }))
  });
};
