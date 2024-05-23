import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'


export function SideBySide({ children }: PropsWithChildren) {
  return (
    <div className={twMerge('flex flex-row gap-4 justify-between w-full')}>
      { children }
    </div>
  )
}
