import { BlogPosts } from './posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="title">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
