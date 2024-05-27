import { Config } from '../config'
import { BlogPosts } from './posts'

export const metadata = {
  title: 'Blog',
  description: `${Config.me} Blog`,
}

export default function Page() {
  return (
    <section>
      <h1 className="title">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
