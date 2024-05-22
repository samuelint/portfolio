import { GithubIcon } from 'lib/icon/github';
import Link from 'next/link';
import { Config } from 'app/config';

export function MyGithub() {
  return (
    <Link
      className="button button-secondary"
      href={Config.githubUrl}
      target='_blank'
    >
      <GithubIcon className='size-4 md:size-6'/>
      <span>Github</span>
    </Link>
  )
}
