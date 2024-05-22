import GoogleCalendarReservation from 'lib/google-calendar-reservation';
import { MyAvatar } from './my-avatar';
import { MySocialMedia } from './my-social-media';
import { Config } from 'app/config';
import { QuebecIcon } from 'lib/icon/quebec';

export function Hero() {
  return (
    <div className='w-full flex flex-col justify-center gap-4'>
      <MyAvatar />
      <h1 className="text-4xl font-semibold tracking-tighter text-center flex justify-center w-full gap-4">
        <span>{ Config.me }</span><QuebecIcon />
      </h1>
      <MySocialMedia />
      <GoogleCalendarReservation />
      <p>
        Bonjour! Je suis Samuel Magny, consultant en development logiciel. 
        Vous avez un projet dont vous voulez discuter ou besoin de conseils tech? 
        Planifions un moment qui nous convient à tous les deux. Je suis flexible et prêt à m'attaquer à n'importe quel défi logiciel que vous avez.
      </p>
    </div>
  )
}