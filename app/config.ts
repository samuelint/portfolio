const me = 'Samuel Magny'
const baseUrl = 'https://smagny.com'
const Config = {
  baseUrl,
  sitename: 'smagny',
  defaultLocale: 'en',
  githubUrl: 'https://github.com/samuelint',
  linkedinUrl: 'https://www.linkedin.com/in/samuel-richard-magny-6576a285/',
  twitterUrl: 'https://x.com/samuelint',
  mediumUrl: 'https://medium.com/@samuelint',
  gravatarEmail: 'samuelint@gmail.com',
  email: 'samuel@smagny.com',
  me,
  headline: 'If you stay the same you are failing behind.',
  includeDraft: process.env.FF_INCLUDE_DRAFT === 'true' || false,
  rss: {
    title: `${me}`,
    url: `${baseUrl}/rss`,
    description: `This is ${me} RSS feed`,
    myMediumFeed: 'https://medium.com/feed/@samuelint',
  }
}

export { Config }
