import { ImageResponse } from 'next/og'
import { Config } from '../config'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || `${Config.me} Portfolio.`

  return new ImageResponse(
    (
      <div className="flex flex-col w-full h-full items-center justify-center bg-white">
        <div className="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 className="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
