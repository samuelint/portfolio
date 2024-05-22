
import gravatarUrl from 'gravatar-url';
import { Config } from 'app/config';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string
}

export function MyAvatar({ className }: Props) {
  const avatarUrl = gravatarUrl(Config.gravatarEmail, { size: 200 })
  return (
    <Link
      className={twMerge('rounded-full flex justify-center items-center', className )}
      href='/'
    >
      <Image className='rounded-full shadow-lg' alt='Samuel Magny' src={avatarUrl} width={200} height={200}/>
    </Link>
  )
}
