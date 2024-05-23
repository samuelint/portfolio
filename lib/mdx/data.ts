import fs from 'fs'
import path from 'path'
import frontmatter from 'front-matter'

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  draft?: string
  tags?: string[]
  locale?: string
}

export type MDXData = {
  metadata: Metadata
  slug: string
  content: string
}


function parseFrontmatter(fileContent: string) {
  const content = frontmatter<Metadata>(fileContent)

  return { metadata: content.attributes, content: content.body }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath): string {
  return fs.readFileSync(filePath, 'utf-8')
}

type GetDirectoryMDXDataProps = {
  dir: string
  includeDraft?: boolean
}
export function getDirectoryMDXData({ dir, includeDraft = false }: GetDirectoryMDXDataProps): MDXData[] {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles
    .map((file) => getPathMDXData(path.join(dir, file)))
    .filter(({ metadata }) => {
      if (includeDraft || !metadata?.draft) {
        return true;
      }
      return metadata.draft === 'true';
    });
}

export function getPathMDXData(filePath: string): MDXData {
  const slug = path.basename(filePath, path.extname(filePath))
  return getMDXData({ mdxContent: readMDXFile(filePath), slug })
}

type GetMDXDataProps = {
  mdxContent: string
  slug: string
}
export function getMDXData({ mdxContent, slug }: GetMDXDataProps): MDXData {
  let { metadata, content } = parseFrontmatter(mdxContent)

  return {
    metadata,
    slug,
    content,
  }
}