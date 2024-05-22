import { Config } from 'app/config'
import { getMDXData } from 'lib/mdx'
import path from 'path'


export function getBlogPosts() {
  return getMDXData({
    dir: path.join(process.cwd(), 'app', 'blog', 'posts'),
    includeDraft: Config.isDevelopment,
  })
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug)
}
