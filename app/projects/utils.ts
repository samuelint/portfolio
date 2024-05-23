import { Config } from 'app/config'
import { getDirectoryMDXData } from 'lib/mdx'
import path from 'path'

type GetProjectPostProps  = {
  includeDraft?: boolean
}


export function getProjectPosts({ includeDraft = Config.includeDraft }: GetProjectPostProps = {}) {
  return getDirectoryMDXData({
    dir: path.join(process.cwd(), 'app', 'projects', 'posts'),
    includeDraft,
  })
}

export function getProjectPost(slug: string) {
  return getProjectPosts({ includeDraft: true }).find((post) => post.slug === slug)
}
