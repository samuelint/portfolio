import { getDirectoryMDXData } from "./data"
import { when } from 'jest-when'
import fs from 'fs'

jest.mock('fs')

describe("getDirectoryMDXData", () => {
  test(`when getting directory mdx data,
        then mdx data is returned`, () => {
    const mockMDXContent = `---
title: "Salut"
publishedAt: '2024-04-22'
summary: 'A summary'
---

Mon super article
`
    when(fs.readdirSync).calledWith('dir').mockReturnValue(['file1.mdx'])
    when(fs.readFileSync).calledWith('dir/file1.mdx', 'utf-8').mockReturnValue(mockMDXContent)

    const result = getDirectoryMDXData({ dir: 'dir' })

    expect(result.length).toBe(1)
  })

  test(`when metadata contains draft tag,
        then mdx data is not returned`, () => {
    const mockMDXContent = `---
title: "Salut"
publishedAt: '2024-04-22'
summary: 'A summary'
draft: true
---

Mon super article
`
    when(fs.readdirSync).calledWith('dir').mockReturnValue(['file1.mdx'])
    when(fs.readFileSync).calledWith('dir/file1.mdx', 'utf-8').mockReturnValue(mockMDXContent)

    const result = getDirectoryMDXData({ dir: 'dir' })

    expect(result.length).toBe(0)
  })

  test(`given includeDraft set to true,
        when metadata contains draft tag,
        then mdx data is not returned`, () => {
    const mockMDXContent = `---
title: "Salut"
publishedAt: '2024-04-22'
summary: 'A summary'
draft: true
---

Mon super article
`
    when(fs.readdirSync).calledWith('dir').mockReturnValue(['file1.mdx'])
    when(fs.readFileSync).calledWith('dir/file1.mdx', 'utf-8').mockReturnValue(mockMDXContent)

    const result = getDirectoryMDXData({ dir: 'dir', includeDraft: true })

    expect(result.length).toBe(1)
  })
})