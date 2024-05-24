import Image, { ImageProps } from 'next/image'

type Props = ImageProps

export function RoundedImage(props: Props) {
  return <Image 
    {...props} 
    alt={props.alt} 
    className="rounded-lg" 
  />
}