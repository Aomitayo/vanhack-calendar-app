import React from 'react'

export default () => {
  const events = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='p-3 md:flex items-start flex-wrap'>
      {events.map(number =>
        <div key={number.toString()} className='event md:w-1/3 lg:w-1/4 flex-none'>
          <div className='event-wrapper my-6  md:m-3 shadow bg-white' >
            <div className='event-banner'>
              <img src='https://via.placeholder.com/480x270' alt='' />
            </div>
            <div className='event-summary p-3'>
              <div className='name'>Interview Practice</div>
              <div className='date'> November 20, 2019 4PM (PST)</div>
              <div className='location'>Zoom</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
