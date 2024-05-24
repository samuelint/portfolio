import { CustomMDX, getDirectoryMDXData } from "../mdx";
import { Post, PostGetter } from "./post.type";
import path from 'path'

export type LocalMdxPostGetterArgs = {
  path: string[]
  includeDraft?: boolean
}

export class LocalMdxPostGetter implements PostGetter {
  public constructor(private readonly args: LocalMdxPostGetterArgs) {}

  public async get(): Promise<Post[]> {
    const posts = getDirectoryMDXData({
      dir: path.join(process.cwd(), ...this.args.path),
      includeDraft: this.args.includeDraft,
    })

    return posts.map(({content, ...data}) => ({...data, Content: <CustomMDX source={content} />}))
  }
}