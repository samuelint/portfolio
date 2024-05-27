import { Post } from "../post/post.type"
import { baseUrl } from 'app/sitemap'
import { getSEODescription } from "./dynamic-summary"

type GenerateMetadataProps = {
  data?: Post
  slugPrefix: string
}

export function generatePostMetadata({ data, slugPrefix }: GenerateMetadataProps) {
  if (!data) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    image,
    locale,
  } = data.metadata
  const images: string[] = []

  if(image) {
    images.push()
  }

  const description = getSEODescription(data)

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
      images: images.map((url) => ({
        url,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}
