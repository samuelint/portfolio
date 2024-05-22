import { notFound } from 'next/navigation'
import { getProjectPost, getProjectPosts } from '../utils'
import { generateMDXMetadata, MDXArticle } from 'lib/mdx'

export async function generateStaticParams() {
  let posts = getProjectPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getProjectPost(params.slug)

  return generateMDXMetadata({ data: post, slugPrefix: 'projects' })
}

export default function Blog({ params }) {
  let post = getProjectPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <MDXArticle data={post} />
  )
}
