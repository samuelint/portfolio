import { getMDXData } from 'lib/mdx'
import path from 'path'


export function getProjectPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'projects', 'posts'))
}

export function getProjectPost(slug: string) {
  return getProjectPosts().find((post) => post.slug === slug)
}
