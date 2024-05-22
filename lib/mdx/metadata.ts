import { MDXData } from "./data"
import { baseUrl } from 'app/sitemap'

type GenerateMetadataProps = {
  data?: MDXData
  slugPrefix: string
}

export function generateMDXMetadata({ data, slugPrefix }: GenerateMetadataProps) {
  if (!data) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    locale,
  } = data.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      locale,
      url: `${baseUrl}/${slugPrefix}/${data.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
