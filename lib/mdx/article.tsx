import { notFound } from 'next/navigation'
import { formatDate } from 'lib/date'
import { CustomMDX, MDXData } from 'lib/mdx'
import LD_JsonScript from 'lib/mdx/ld+json'


type ArticleProps = {
  data: MDXData
}

export function MDXArticle({ data }: ArticleProps) {
  if (!data) {
    notFound()
  }

  return (
    <section>
      <LD_JsonScript data={data} slugPrefix='/blog'/>
      <h1 className="title">
        {data.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(data.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={data.content} />
      </article>
    </section>
  )
}
