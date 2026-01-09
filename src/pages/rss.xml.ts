import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: "Sahil's Notes",
    description: "Notes on spirit, money, and machines.",
    site: context.site || 'https://your-domain.vercel.app',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description || '',
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
