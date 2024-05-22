import { MyLinkedIn } from './my-linkedin';
import { MyGithub } from './my-github';
import { MyTwitter } from './my-twitter';
import { MyMedium } from './my-medium';


export function MySocialMedia() {
  return (
    <div className='w-full flex justify-between overflow-x-auto'>
      <MyLinkedIn />
      <MyMedium />
      <MyGithub />
      <MyTwitter />
    </div>
  )
}
