import { Post } from "@/lib/post";
import { Config } from "app/config";
import { Feed } from "feed";
import Parser from 'rss-parser';

export type RssPost = Post
type AddRssPostsArgs = {
  slugPrefix: string
  posts: RssPost[]
}
type AddRssPostArgs = {
  slugPrefix: string
  post: RssPost
}

export class FeedBuilder {
  private readonly feed: Feed;

  public constructor() {
    this.feed = new Feed({
      title: Config.rss.title,
      description: Config.rss.description,
      id: Config.baseUrl,
      link: Config.rss.url,
      copyright: Config.me,
    });
  }

  public async addMediumFeed(url: string): Promise<this> {
    const parser = new Parser()
    const feed = await parser.parseURL(url)

    feed.items.forEach((item) => {
      this.feed.addItem({
        title: `${item.title}`,
        link: `${item.link}`,
        id: item.link,
        date: item.pubDate ? new Date(item.pubDate) : new Date(),
        content: item['content:encoded'],
        description: item['content:encodedSnippet'],
      })
    })

    return this;
  }

  public addPost({ post, slugPrefix }: AddRssPostArgs): this {
    this.feed.addItem({
      title: post.metadata.title,
      link: `${Config.baseUrl}${slugPrefix}/${post.slug}`,
      id: `${Config.baseUrl}${slugPrefix}/${post.slug}`,
      date: new Date(post.metadata.publishedAt),
      description: post.metadata.summary || '',
      content: post.content,
    })

    return this
  }

  public addPosts({ posts, slugPrefix }: AddRssPostsArgs): this {
    posts.forEach((post) => this.addPost({ post, slugPrefix }));

    return this
  }

  public toRss2(): string {
    return this.feed.rss2();
  }
}