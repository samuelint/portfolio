import { getBlogPosts } from 'app/blog/utils'
import { FeedBuilder } from './feed.builder'

export async function GET() {
  let allBlogs = await getBlogPosts({ includeDraft: false })

  const rss2Feed = new FeedBuilder().addPosts({ posts: allBlogs, slugPrefix: '/blog' }).toRss2()

  return new Response(rss2Feed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
