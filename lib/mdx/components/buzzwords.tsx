import { PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


interface Props extends PropsWithChildren {
  buzzwords?: ReactNode[]
}

export function Buzzwords({ children, buzzwords = [] }: Props) {
  return (
    <div className={twMerge('grid grid-cols-6 gap-4 w-full')}>
      { buzzwords.map((buzzword) => (<div key={String(buzzword)}>{ buzzword }</div>)) }
      { children }
    </div>
  )
}
