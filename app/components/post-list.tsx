import Link from 'next/link'
import { formatDate } from 'lib/date'
import { Badge } from 'lib/components/badge'
import { Post } from '@/lib/post'


interface Props {
  posts: Post[]
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
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-center">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <PostSource post={post}/>
            </div>
          </Link>
        ))}
    </div>
  )
}

function PostSource({ post }: {post: Post}) {
  return (
    <div className='flex gap-0.5 h-fit'>
      { post.metadata.draft && <Badge className='bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'>Draft</Badge>}
      { post.metadata.source && <Badge className='bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300'>{post.metadata.source}</Badge>}
    </div>
  )
}
