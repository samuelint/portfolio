import { BlogPosts } from 'app/blog/posts'
import { Hero } from './components/hero'
import HorizontalSeparator from './components/horizontal-separator'
import { ProjectsPosts } from './projects/posts'


export default function Page() {
  return (
    <section className='w-full'>
      <Hero />
      <HorizontalSeparator className='my-8' />
      <section>
        <h2 className="title">Projects</h2>
        <ProjectsPosts />
      </section>
      <HorizontalSeparator className='my-8' />
      <section>
        <h2 className="title">Blog</h2>
        <BlogPosts />
      </section>
    </section>
  )
}
