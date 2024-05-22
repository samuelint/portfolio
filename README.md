# smagny portfolio
Samuel Magny Portfolio website

Includes:
- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting
- Tailwind v4
- Vercel Speed Insights / Web Analytics
- Geist font

## Development Setup
* Install `pnpm` by running `npm install -g pnpm`
* Install project dependencies by running `pnpm install`

## Local Development Process
To run the portfolio locally, follow these steps:
1. Ensure that you have completed the development setup steps mentioned above.
2. Run `pnpm run dev` to start the local development server.
3. Open your web browser and navigate to `http://localhost:3000` to view the portfolio.

## Add content
Add a `.mdx` / `.md` file into the `app/blog/posts` or `app/projects/posts` directory

### Frontmatter

---

| Field        | Type     | Description                            |
|--------------|----------|----------------------------------------|
| title        | string   | The title of the content                |
| summary      | string   | The summary of the content              |
| publishedAt  | date     | The date of the content                 |
| draft        | string   | If article is draft or not. If defined, the article is only listed in development (not visible once deployed) |
| description  | string   | A brief description of the content      |
| tags         | string[] | An array of tags associated with content |
| locale       | string[] | The locale, e.g., 'en_US'                |

## Icons
Hero icons https://heroicons.com
