import { PropsWithChildren } from 'react'
import { highlight } from 'sugar-high'

type Props = {
  children: string
}

export function Code({ children, ...props }: Props) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}
