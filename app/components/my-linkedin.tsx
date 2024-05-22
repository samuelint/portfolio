import { LinkedInIcon } from 'lib/icon/linkedin';
import Link from 'next/link';
import { Config } from 'app/config';

export function MyLinkedIn() {
  return (
    <Link
      className="button button-secondary"
      href={Config.linkedinUrl}
      target='_blank'
    >
      <LinkedInIcon className='size-4 md:size-6'/>
      <span>LinkedIn</span>
    </Link>
  )
}
