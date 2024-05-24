import { Config } from "app/config"
import { FeedBuilder, RssPost } from "./feed.builder"

test(`when building rss2 feed,
      then feed contains config title`, () => {
  const result = new FeedBuilder().toRss2()
  
  expect(result).toContain(`<title>${Config.me}</title>`)
})

test(`when building rss2 feed,
      then feed contains config description`, () => {
  const result = new FeedBuilder().toRss2()
  
  expect(result).toContain(`<description>${Config.rss.description}</description>`)
})

test(`when building rss2 feed,
      then feed contains config rss link`, () => {
  const result = new FeedBuilder().toRss2()
  
  expect(result).toContain(`<link>${Config.rss.url}</link>`)
})

test(`when building rss2 feed,
      then feed contains copyright with my name`, () => {
  const result = new FeedBuilder().toRss2()
  
  expect(result).toContain(`<copyright>${Config.me}</copyright>`)
})

test(`given post,
      when building rss2 feed,
      then post link have slug prefix`, () => {
  const post = {
    metadata: {
      title: 'Salut',
    },
    slug: 'salut',
  } as RssPost

  const result = new FeedBuilder().addPost({ post, slugPrefix: '/yoo' }).toRss2()
  
  expect(result).toContain(`<link>${Config.baseUrl}/yoo/salut</link>`)
})

test(`given post,
      when building rss2 feed,
      then post id is link`, () => {
  const post = {
    metadata: {
      title: 'Salut',
    },
    slug: 'salut',
  } as RssPost

  const result = new FeedBuilder().addPost({ post, slugPrefix: '/yoo' }).toRss2()
  
  expect(result).toContain(`<guid>${Config.baseUrl}/yoo/salut</guid>`)
})

test(`given post,
      when building rss2 feed,
      then date is publisedAt`, () => {
  const post = {
    metadata: {
      title: 'Salut',
      publishedAt: '2021-01-01',
    },
    slug: 'salut',
  } as RssPost

  const result = new FeedBuilder().addPost({ post, slugPrefix: '/yoo' }).toRss2()
  
  expect(result).toContain(`Fri, 01 Jan 2021 00:00:00 GMT`)
})

test(`given post,
      when building rss2 feed,
      then description is summary`, () => {
  const post = {
    metadata: {
      title: 'Salut',
      summary: 'Hello',
    },
    slug: 'salut',
  } as RssPost

  const result = new FeedBuilder().addPost({ post, slugPrefix: '/yoo' }).toRss2()
  
  expect(result).toContain(`<description><![CDATA[Hello]]></description>`)
})

test(`given post,
      when building rss2 feed,
      then content is post content`, () => {
  const post = {
    metadata: {
      title: 'Salut',
      summary: 'Hello',
    },
    content: 'Hey baby',
    slug: 'salut',
  } as RssPost

  const result = new FeedBuilder().addPost({ post, slugPrefix: '/yoo' }).toRss2()
  
  expect(result).toContain(`<content:encoded><![CDATA[Hey baby]]></content:encoded>`)
})
