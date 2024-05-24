import { Item } from "rss-parser";
import { Post } from "./post.type";

export type ToPostArgs = {
  item: Item
}

export function toPost({ item }: ToPostArgs): Post | null {
  try {
    const url = new URL(item.link ?? '')
    const slug = `medium${url.pathname}`
    const categories = item.categories ?? []

    return {
      metadata: {
        title: item.title ?? '',
        publishedAt: item.pubDate || new Date().toISOString(),
        summary: item['content:encodedSnippet'],
        tags: categories,
        source: 'Medium',
        externalLink: url.href,
      },
      slug,
      content: item['content:encoded'],
      Content: <div dangerouslySetInnerHTML={{__html: item['content:encoded'] }}></div>
    }
  } catch (error) {
    console.error('Error adapting medium rss post', error)
    return null
  }
}

