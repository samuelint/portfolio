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

    const content = item.content ?? item['content:encoded'] ?? ''
    const summary = item.contentSnippet ??item['content:encodedSnippet'] ?? ''
    return {
      metadata: {
        title: item.title ?? '',
        publishedAt: item.pubDate || new Date().toISOString(),
        summary,
        tags: categories,
        source: 'Medium',
        externalLink: url.href,
      },
      slug,
      content,
      Content: <div dangerouslySetInnerHTML={{__html: content }}></div>
    }
  } catch (error) {
    console.error('Error adapting medium rss post', error)
    return null
  }
}

