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
      <LinkedInIcon/>
      <span>LinkedIn</span>
    </Link>
  )
}
