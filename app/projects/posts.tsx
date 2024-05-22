import { getProjectPosts } from './utils'
import { PostsList } from 'app/components/post-list'

export function ProjectsPosts() {
  let posts = getProjectPosts()

  return (
    <PostsList posts={posts} slugPrefix='/projects'/>
  )
}
