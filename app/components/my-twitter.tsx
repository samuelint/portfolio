import { Config } from 'app/config';
import { GithubIcon } from 'lib/icon/github';
import { TwitterIcon } from 'lib/icon/twitter';
import Link from 'next/link';


export function MyTwitter() {
  return (
    <Link
      className="button button-secondary"
      href={Config.twitterUrl}
      target='_blank'
    >
      <TwitterIcon/>
      <span>X (Twitter)</span>
    </Link>
  )
}
