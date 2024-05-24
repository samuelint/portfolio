import Link from 'next/link'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  href: string
}

export function CustomLink(props: Props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}