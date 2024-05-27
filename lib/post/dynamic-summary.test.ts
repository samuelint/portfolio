import { metadata } from "@/app/layout";
import { extractSummaryFromTitles, getSEODescription } from "./dynamic-summary"

describe('extractSummaryFromTitles', () => {
  test(`given a post with multiple titles in content,
        when extractSummaryFromTitles,
        then summary contains every titles & subtitles seperated by comma `, () => {
    const content = `
        # Title1
        Some content here.
        
        ## SubTitle1.1
        Some more content here.
        
        ## SubTitle1.2
        Additional content here.
        
        # Title2
        Final content here.
        `;

    const result = extractSummaryFromTitles({ content })

    expect(result).toEqual('Title1, SubTitle1.1, SubTitle1.2, Title2')
})

test(`given a post with multiple titles in content,
        starting with sub title, (no tilte)
      when extractSummaryFromTitles,
      then summary contains every titles & subtitles seperated by comma `, () => {
    const content = `
        ## Title1
        Some content here.
        
        ### SubTitle1.1
        Some more content here.
        
        ### SubTitle1.2
        Additional content here.
        
        ## Title2
        Final content here.
        `;

    const result = extractSummaryFromTitles({ content })

    expect(result).toEqual('Title1, SubTitle1.1, SubTitle1.2, Title2')
  })
})

describe('getSEODescription', () => {
  test(`given post without titles,
        when getting SEO description,
        then only post summary is returned`, () => {
    const post = { content: 'some content', metadata: {summary: 'my summary'} }
    
    const result = getSEODescription(post)

    expect(result).toEqual('my summary')
  })

  test(`given post with titles,
        when getting SEO description,
        then post summary & titles are returned`, () => {
    const post = { content: '## Some content title', metadata: {summary: 'my summary'} }
    
    const result = getSEODescription(post)

    expect(result).toEqual('my summary, Some content title')
  })
})