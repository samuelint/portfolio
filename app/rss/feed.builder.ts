import { Config } from "app/config";
import { Feed } from "feed";
import { MDXData } from "lib/mdx";

type AddPostArgs = {
  slugPrefix: string
  posts: MDXData[]
}

export class FeedBuilder {
  private readonly feed: Feed;

  public constructor() {
    this.feed = new Feed({
      title: Config.rss.title,
      description: Config.rss.description,
      id: Config.baseUrl,
      link: Config.rss.url,
      favicon: `${Config.baseUrl}/favicon.ico`,
      copyright: `All rights reserved 2024, ${Config.me}`,
      author: {
        name: Config.me,
        email: Config.email,
        link: Config.baseUrl,
      }
    });
  }

  public addPosts({ posts, slugPrefix }: AddPostArgs): this {
    posts.forEach((post) => {
      this.feed.addItem({
        title: post.metadata.title,
        link: `${Config.baseUrl}${slugPrefix}/${post.slug}`,
        id: `${Config.baseUrl}${slugPrefix}/${post.slug}`,
        date: new Date(post.metadata.publishedAt),
        description: post.metadata.summary || '',
        content: post.content,
      })
    });

    return this
  }

  public toRss2(): string {
    return this.feed.rss2();
  }
}