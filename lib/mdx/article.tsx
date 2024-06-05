import { notFound } from 'next/navigation'
import { formatDate } from 'lib/date'
import { Post } from '../post/post.type'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import LD_JsonScript from '../post/ld+json'


type Features = {
  showDate: boolean
  showTitle: boolean

}
type ArticleProps = {
  data: Post
  slugPrefix?: string

  features?: Features
}

const DEFAULT_FEATURES: Features = {
  showDate: true,
  showTitle: true,
}

export function MDXArticle({ data, slugPrefix, features = DEFAULT_FEATURES }: ArticleProps) {
  if (!data) {
    notFound()
  }

  return (
    <section>
      <LD_JsonScript data={data} slugPrefix={slugPrefix}/>
      {features.showTitle && <h1 className="title">
        {data.metadata.title}
      </h1>}
      <div className="flex justify-between items-center mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {features.showDate && formatDate(data.metadata.publishedAt)}
        </p>
        { data.metadata.source && data.metadata.externalLink && 
          <Link 
            href={data.metadata.externalLink}
            target='_blank'
            className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-1 items-center">
            {data.metadata.source}
            <ArrowTopRightOnSquareIcon className='size-4'/>
          </Link>
        }
      </div>
      <article className="prose">
        { data.Content }
      </article>
    </section>
  )
}
