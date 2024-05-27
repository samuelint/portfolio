import { MarkdownTitleExtractResult, parseMarkdownTitles } from "../mdx/title-parser";
import { Post } from "./post.type";

export function extractSummaryFromTitles(post: Pick<Post, 'content'>): string {
  const titles = parseMarkdownTitles(post.content)

  return titles.reduce<string[]>((acc, title) => titleToArray(acc, title), []).join(', ')
}

function titleToArray(titles: string[], { title, sub }: MarkdownTitleExtractResult): string[] {
  titles.push(title)
  sub.forEach((subTitle) => titleToArray(titles, subTitle))

  return titles
}

type SEODescriptionProps = Pick<Post, 'content'> & { metadata: Pick<Post['metadata'], 'summary'>}
export function getSEODescription(post: SEODescriptionProps): string {
  const summary = post.metadata.summary
  const titles = extractSummaryFromTitles(post)

  return [summary, titles].filter(Boolean).join(', ')
}