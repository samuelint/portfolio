import Link from 'next/link'
import { formatDate } from 'lib/date'
import { MDXData } from 'lib/mdx'
import { Badge } from 'lib/components/badge'


interface Props {
  posts: MDXData[]
  slugPrefix?: string
}

export function PostsList({ posts, slugPrefix = '' }: Props) {
  return (
    <div>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`${slugPrefix}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
            <div>
              { post.metadata.draft && <Badge className='bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'>Draft</Badge>}
              { post.metadata.tags && post.metadata.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
          </Link>
        ))}
    </div>
  )
}
