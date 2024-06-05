import GoogleCalendarReservation from 'lib/google-calendar-reservation';
import { MyAvatar } from './my-avatar';
import { MySocialMedia } from './my-social-media';
import { Config } from 'app/config';
import { QuebecIcon } from 'lib/icon/quebec';
import { MDXArticle } from '@/lib/mdx';
import { LocalMdxPostGetter, PostGetterBuilder } from '@/lib/post';


const heroPostsGetter = new PostGetterBuilder()
  .add(new LocalMdxPostGetter({ path: ['app', 'hero'] }))

  
export async function Hero() {
  const heros = await heroPostsGetter.get()

  return (
    <div className='w-full flex flex-col justify-center gap-4'>
      <MyAvatar />
      <h1 className="text-4xl font-semibold tracking-tighter text-center flex justify-center w-full gap-4">
        <span>{ Config.me }</span><QuebecIcon />
      </h1>
      <p className='text-center flex justify-center'>{ Config.headline }</p>
      <MySocialMedia />
      { heros.map((hero, index) => (<MDXArticle key={index} features={{ showTitle: false, showDate: false }} data={hero}/>))}
      <GoogleCalendarReservation>
        <span>Schedule a meeting with me</span>
        <span>/</span>
        <span>Planifier une rencontre avec moi</span>
      </GoogleCalendarReservation>
    </div>
  )
}
