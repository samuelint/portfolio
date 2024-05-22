import { Config } from 'app/config'
import { getMDXData } from 'lib/mdx'
import path from 'path'


export function getProjectPosts() {
  return getMDXData({
    dir: path.join(process.cwd(), 'app', 'projects', 'posts'),
    includeDraft: Config.isDevelopment,
  })
}

export function getProjectPost(slug: string) {
  return getProjectPosts().find((post) => post.slug === slug)
}
