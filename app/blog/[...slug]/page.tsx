import { notFound } from 'next/navigation'

import { MDXArticle } from 'lib/mdx'
import { findBlogPost, getBlogPosts } from '../utils'
import { generatePostMetadata } from '@/lib/post'

type Props = {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  let posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export async function generateMetadata({ params }: Props) {
  let post = await findBlogPost(params.slug.join('/'))
  if(!post) return;

  return generatePostMetadata({ data: post, slugPrefix: 'blog' })
}

export default async function Blog({ params }: Props) {
  let post = await findBlogPost(toPostSlug(params.slug))

  if (!post) {
    notFound()
  }

  return (
    <MDXArticle data={post} />
  )
}

function toPostSlug(slug: string[]): string {
  return slug.map(decodeURIComponent).join('/')
}