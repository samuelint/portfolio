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

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

type GetMDXDataProps = {
  dir: string
  includeDraft?: boolean
}
export function getMDXData({ dir, includeDraft = false }: GetMDXDataProps): MDXData[] {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    if (metadata.draft && metadata.draft != 'false' && !includeDraft) {
      return
    }

    return {
      metadata,
      slug,
      content,
    }
  }).filter(Boolean) as MDXData[];
}