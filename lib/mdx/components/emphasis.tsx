import Image, { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'



export function Emphasis({ children }: PropsWithChildren) {
  return <span className='tracking-tight font-bold'>{children}</span>
}