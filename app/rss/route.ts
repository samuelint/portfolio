import { getBlogPosts } from 'app/blog/utils'
import { FeedBuilder } from './feed.builder'
import { Config } from '../config'

export async function GET() {
  let allBlogs = await getBlogPosts()

  const builder = new FeedBuilder()
  builder.addPosts({ posts: allBlogs, slugPrefix: '/blog' })
  await builder.addMediumFeed(Config.rss.myMediumFeed)

  return new Response(builder.toRss2(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
