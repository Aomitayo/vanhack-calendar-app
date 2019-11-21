import React, { useContext } from 'react'
import dayjs from 'dayjs'
import AuthContext, { hasRole } from '../auth-context'
import { participationStatus } from '../model/vanhack-events'

const eventTypeDateFormats = {
  'interview practice': 'MMMM DD YYYY h:mmA',
  'vanhackathon': 'MMMM DD YYYY',
  'leap': 'MMMM DD YYYY',
  'recruiting-mission': 'MMMM DD YYYY',
  'conference': 'MMMM DD YYYY'
}

const formatEventDate = (eventType, date) => dayjs(date).format(eventTypeDateFormats[eventType])

const eventTypeTags = {
}

console.log(hasRole)

export default ({ event }) => {
  const { user } = useContext(AuthContext)

  const {
    canApplyToEvent,
    canUnapplyFromEvent,
    canAttendEvent,
    canUnattendEvent,
    shouldJoin,
    shouldOfferPremium
  } = participationStatus(hasRole, event, user)

  return (
    <div className='relative event-wrapper shadow bg-white' >
      {
        event.premiumOnly && <div className='absolute right-0 pr-3'>
          <span
            className='leading-tight font-bold text-xs italic text-green-500 -mt-1 border border-green-300 rounded px-1 bg-white'>
            Premium Only!</span>
        </div>
      }
      <div className='event-banner'>
        <img className='md:w-full' src={event.photo} alt='' />
      </div>
      <div className='event-summary p-3'>
        <div className='name font-bold text-base mr-3'>{event.name}</div>
        <div className='date text-gray-600 text-sm font-semibold mr-3'>{formatEventDate(event.eventType, event.start)}</div>
        <div className='location text-gray-600 text-sm font-semibold mr-3'>
          <i className='fa fa-map-marker-alt mr-2' />{event.location}
        </div>
        <div className='h-6'>
          { event.deadline && <>
            <span className='text-base font-semibold mr-2'>Deadline:</span>
            <span className='text-base text-gray-600'>11/26/2019</span>
          </>
          }
        </div>
        <a
          className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
          href='#forgotten-password'>
            View details
        </a>
      </div>

      <div className='event-actions flex flex-row justify-end items-center p-3 h-12'>
        {canApplyToEvent && <button className='btn-event-action'>Apply</button>}
        {canUnapplyFromEvent && <button className='btn-event-action'>Unapply</button>}
        {canAttendEvent && <button className='btn-event-action'>Attend</button>}
        {canUnattendEvent && <button className='btn-event-action'>Unattend</button>}
        {shouldOfferPremium && <button className='btn-event-action premium'>Join Vanhack Premium</button>}
      </div>
    </div>
  )
}
