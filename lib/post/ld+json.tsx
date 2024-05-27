import { baseUrl } from 'app/sitemap'
import { Config } from 'app/config'
import { Post } from '../post/post.type'
import { getSEODescription } from './dynamic-summary'

type LDJsonScriptProps = {
  data: Post
  slugPrefix?: string
}

export default function LD_JsonScript({ data, slugPrefix }: LDJsonScriptProps) {
  const description = getSEODescription(data)
  return (
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: data.metadata.title,
            datePublished: data.metadata.publishedAt,
            dateModified: data.metadata.publishedAt,
            description,
            image: data.metadata.image
              && `${baseUrl}${data.metadata.image}`,
            url: `${baseUrl}${slugPrefix}/${data.slug}`,
            author: {
              '@type': 'Person',
              name: Config.me,
            },
          }),
        }}
      />
  )
}
