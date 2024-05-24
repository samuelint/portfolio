import { getBlogPosts } from 'app/blog/utils'
import { PostsList } from 'app/components/post-list'

export async function BlogPosts() {
  let posts = await getBlogPosts()

  return (
    <PostsList posts={posts} slugPrefix='/blog'/>
  )
}
