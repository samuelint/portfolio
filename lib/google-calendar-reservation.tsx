'use client'
import Link from 'next/link';
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { PropsWithChildren } from 'react';

export default function GoogleCalendarReservation({ children }: PropsWithChildren) {
  return (
  <Link 
    className='button button-primary'
    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CaM25cQlU86wMq--kzSn1LNc78JFxRJsufYOtV5_C9NyJbrlCl6HhHD3fg-ja856onk0NI1Ac?gv=true" 
    target='_blank'>
    <CalendarDaysIcon className='size-6' />
    { children }
  </Link>
  )
}
