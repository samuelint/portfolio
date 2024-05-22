import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from 'app/blog/utils'
import { generateMDXMetadata, MDXArticle } from 'lib/mdx'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  return generateMDXMetadata({ data: post, slugPrefix: 'blog' })
}

export default function Blog({ params }) {
  let post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <MDXArticle data={post} />
  )
}
