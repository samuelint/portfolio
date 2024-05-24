import { ReactNode } from "react"

export type PostMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  draft?: string
  tags?: string[]
  locale?: string
  source?: string
  externalLink?: string
}

export type Post = {
  metadata: PostMetadata
  slug: string
  content: string
  Content: ReactNode
}

export interface PostGetter {
  get(): Promise<Post[]>
}
