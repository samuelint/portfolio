import { Config } from 'app/config'
import { getDirectoryMDXData } from 'lib/mdx'
import path from 'path'

type GetBlogPostProps  = {
  includeDraft?: boolean
}

export function getBlogPosts({ includeDraft = Config.includeDraft }: GetBlogPostProps = {}) {
  return getDirectoryMDXData({
    dir: path.join(process.cwd(), 'app', 'blog', 'posts'),
    includeDraft,
  })
}

export function getBlogPost(slug: string) {
  return getBlogPosts({ includeDraft: true }).find((post) => post.slug === slug)
}
