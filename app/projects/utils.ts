import { Config } from 'app/config'
import { getMDXData } from 'lib/mdx'
import path from 'path'

type GetProjectPostProps  = {
  includeDraft?: boolean
}


export function getProjectPosts({ includeDraft = Config.isDevelopment }: GetProjectPostProps = {}) {
  return getMDXData({
    dir: path.join(process.cwd(), 'app', 'projects', 'posts'),
    includeDraft,
  })
}

export function getProjectPost(slug: string) {
  return getProjectPosts({ includeDraft: true }).find((post) => post.slug === slug)
}
