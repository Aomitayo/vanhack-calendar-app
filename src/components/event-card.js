import React, { useContext } from 'react'
import dayjs from 'dayjs'
import AuthContext, { hasRole } from '../auth-context'
import { participation } from '../lib/event-utils'
console.log(hasRole)

export default ({ event }) => {
  const { user } = useContext(AuthContext)

  const { canApply, canUnapply, canAttend, canJoin, shouldJoin, offerPremium } = participation(user, event, hasRole)

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
        <div className='date text-gray-600 text-sm font-semibold mr-3'>{dayjs(event.start).format('MMMM DD YYYY')}</div>
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
        {canApply && <button className='btn-event-action'>Apply</button>}
        {canUnapply && <button className='btn-event-action'>Unapply</button>}
        {canAttend && <button className='btn-event-action'>Attend</button>}
        {canJoin && <button className='btn-event-action' disabled={shouldJoin} >Join</button>}
        {offerPremium && <button className='btn-event-action premium'>Join Vanhack Premium</button>}
      </div>
    </div>
  )
}
        /*
        {
          event.isPremiumOnly && !hasRole('premiumCandidate')
            ? <button className='btn'>Attend</button>
            : (<span className='btn'>
              Sign Up for Premium
              </span>)
        }
        {actionApplyToEvent}
        {if (event.requiresApplication && ({
          ! hasApplied(event, user)
            ? <button className='btn'>Attend</button>
            : <button className='btn'>Apply</button>
        })}
        */
