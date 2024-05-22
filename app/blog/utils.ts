import { getMDXData } from 'lib/mdx'
import path from 'path'


export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug)
}
