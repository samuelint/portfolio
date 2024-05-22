import { GithubIcon } from 'lib/icon/github';
import Link from 'next/link';
import { Config } from 'app/config';
import { MediumIcon } from 'lib/icon/medium';

export function MyMedium() {
  return (
    <Link
      className="button button-secondary"
      href={Config.mediumUrl}
      target='_blank'
    >
      <MediumIcon/>
      <span>Medium</span>
    </Link>
  )
}
