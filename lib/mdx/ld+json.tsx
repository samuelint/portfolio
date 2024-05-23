import { notFound } from 'next/navigation'

import { baseUrl } from 'app/sitemap'
import { MDXData } from './data'
import { Config } from 'app/config'

type LDJsonScriptProps = {
  data: MDXData
  slugPrefix?: string
}

export default function LD_JsonScript({ data, slugPrefix }: LDJsonScriptProps) {
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
            description: data.metadata.summary,
            image: data.metadata.image
              ? `${baseUrl}${data.metadata.image}`
              : `/og?title=${encodeURIComponent(data.metadata.title)}`,
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
