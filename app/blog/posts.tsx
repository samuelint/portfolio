import { getBlogPosts } from 'app/blog/utils'
import { PostsList } from 'app/components/post-list'

export function BlogPosts() {
  let posts = getBlogPosts()

  return (
    <PostsList posts={posts} slugPrefix='/blog'/>
  )
}
