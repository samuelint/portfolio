import { parseMarkdownTitles } from "./title-parser";

const markdown = `
# Title1

Some content here.

## SubTitle1.1

Some more content here.

### SubTitle1.1.1

Even more content here.

## SubTitle1.2

Additional content here.

# Title2

Final content here.

`;

test(`given markdown,
      when parsing titles,
      then h1 titles are returned`, () => {
  const result = parseMarkdownTitles(markdown);

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({  title: 'Title1', }),
    expect.objectContaining({  title: 'Title2', })
  ]))
})

test(`given markdown,
      when parsing titles,
      then h2 titles are returned`, () => {
  const result = parseMarkdownTitles(markdown);

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({  
      title: 'Title1', 
      sub: expect.arrayContaining([
        expect.objectContaining({
          title: 'SubTitle1.1',
        }),
        expect.objectContaining({
          title: 'SubTitle1.2',
        }),
      ]),
   }),
  ]))
})

test(`given markdown,
      when parsing titles,
      then h3 titles are returned`, () => {
  const result = parseMarkdownTitles(markdown);

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({  
      title: 'Title1',
      sub: expect.arrayContaining([
        expect.objectContaining({
          title: 'SubTitle1.1',
          sub: expect.arrayContaining([
            expect.objectContaining({
              title: 'SubTitle1.1.1'
            }),
          ]),
        }),
      ]),
   }),
  ]))
})

test(`given markdown with only subtitles,
      when parsing titles,
      then h2 titles are returned`, () => {
  const markdown = `
    ## Title1
    Some content here.


    ## Title2
    Final content here.
    `;

  const result = parseMarkdownTitles(markdown);

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({  title: 'Title1', }),
    expect.objectContaining({  title: 'Title2', })
  ]))
})