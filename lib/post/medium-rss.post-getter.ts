import Parser from "rss-parser";

import { Post, PostGetter } from "./post.type";
import { toPost } from "./medium-rss.adapter";


export type MediumRssPostGetterArgs = {
  url: string
}

export class MediumRssPostGetter implements PostGetter {
  public constructor(private readonly args: MediumRssPostGetterArgs) {}

  public async get(): Promise<Post[]> {
    const rssBaseUrl = this.args.url
    const parser = new Parser()
    const feed = await parser.parseURL(rssBaseUrl)

    return feed.items.map((item) => toPost({ item })).filter(Boolean) as Post[]
  }
}