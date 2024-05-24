import { LocalMdxPostGetter, MediumRssPostGetter, Post, PostGetterBuilder } from '@/lib/post'
import { Config } from 'app/config'


const blogPostGetter = new PostGetterBuilder()
  .add(new LocalMdxPostGetter({ path: ['app', 'blog', 'posts'], includeDraft: Config.includeDraft }))
  .add(new MediumRssPostGetter({ url: Config.rss.myMediumFeed }))

export async function getBlogPosts(): Promise<Post[]> {
  return blogPostGetter.get()
}

export async function findBlogPost(slug: string): Promise<Post | undefined> {
  const posts = await getBlogPosts()

  return posts.find((post) => post.slug === slug)
}
