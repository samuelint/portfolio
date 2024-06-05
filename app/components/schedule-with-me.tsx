import GoogleCalendarReservation from 'lib/google-calendar-reservation';

export async function ScheduleWithMe() {
  return (
    <GoogleCalendarReservation>
      <span>Schedule a meeting with me</span>
      <span>/</span>
      <span>Planifier une rencontre avec moi</span>
    </GoogleCalendarReservation>
  )
}
