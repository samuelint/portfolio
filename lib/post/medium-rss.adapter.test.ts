import { Item } from "rss-parser"
import { toPost } from "./medium-rss.adapter"

const link = 'https://medium.com/@samuelint/matrix-principles-in-a-3d-environment-threejs-eed1e33f4ef6?source=rss-96a6ad36dc1e------2'

test(`given item with title,
      when adapting,
      then post contains same title`, () => {
  const item = {
    title: 'Salut',
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.title).toBe('Salut')
})

test(`given item without title,
      when adapting,
      then post title is empty`, () => {
  const item = {
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.title).toBe('')
})

test(`given item with pubDate,
      when adapting,
      then post contains same publish at`, () => {
  const item = {
    pubDate: '2021-01-01T00:00:00Z',
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.publishedAt).toBe('2021-01-01T00:00:00Z')
})

test(`given item without pubDate,
      when adapting,
      then post publish at is Now`, () => {
  const item = {
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.publishedAt).toBe(new Date().toISOString())
})

test(`given item with content:encodedSnippet,
      when adapting,
      then post summary is defined`, () => {
  const item = {
    'content:encodedSnippet': 'asd',
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.summary).toEqual('asd')
})

test(`given item without content:encodedSnippet,
      when adapting,
      then post summary is not defined`, () => {
  const item = {
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.summary).toBeUndefined()
})

test(`when adapting,
      then post source is "Medium"`, () => {
  const item = {
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.source).toEqual('Medium')
})

test(`given item with categories,
      when adapting,
      then post tags contains categories`, () => {
  const item = {
    link,
    categories: ['A', 'B']
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.tags).toEqual(expect.arrayContaining(['A', 'B']))
})

test(`given item with link,
      when adapting,
      then post external link is link`, () => {
  const item = {
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.metadata.externalLink).toEqual(link)
})

test(`given item with link,
      when adapting,
      then post slug is medium feed path`, () => {
  const item = {
    link,
  } as Item

  const result = toPost({ item })

  expect(result?.slug).toEqual('medium/@samuelint/matrix-principles-in-a-3d-environment-threejs-eed1e33f4ef6')
})

test(`given item without link,
      when adapting,
      then null is returned`, () => {
  console.error = jest.fn()
  const item = {
  } as Item

  const result = toPost({ item })

  expect(result).toBe(null)
})