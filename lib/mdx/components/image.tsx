import Image from 'next/image'

export function RoundedImage(props) {
  return <Image 
    alt={props.alt} 
    className="rounded-lg" 
    {...props} 
  />
}