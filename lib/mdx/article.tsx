import { notFound } from 'next/navigation'
import { formatDate } from 'lib/date'
import { CustomMDX, MDXData } from 'lib/mdx'
import LD_JsonScript from 'lib/mdx/ld+json'


type Features = {
  showDate: boolean
  showTitle: boolean

}
type ArticleProps = {
  data: MDXData
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
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {features.showDate && formatDate(data.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={data.content} />
      </article>
    </section>
  )
}
