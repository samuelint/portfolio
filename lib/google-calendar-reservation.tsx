'use client'
import Link from 'next/link';
import { CalendarDaysIcon } from '@heroicons/react/24/solid'



export default function GoogleCalendarReservation() {
  return (
  <Link 
    className='button button-primary'
    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CaM25cQlU86wMq--kzSn1LNc78JFxRJsufYOtV5_C9NyJbrlCl6HhHD3fg-ja856onk0NI1Ac?gv=true" 
    target='_blank'>
    <CalendarDaysIcon className='size-6' />
    <span>Planifier une rencontre avec moi</span>
  </Link>
  )
}
