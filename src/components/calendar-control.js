import React from 'react'
import dayjs from 'dayjs'

const DateRangeLabel = ({start, end, span}) => {
  let rangeLabel

  switch (span) {
    case 'week':
      rangeLabel = <span>{dayjs(start).format('DD MMM')} -- {dayjs(start).format('DD MMM YYYY')}</span>
      break
    case 'month':
      rangeLabel = <span>{dayjs(start).format('MMM YYYY')}</span>
      break
    case 'year':
      rangeLabel = <span>{dayjs(start).format('YYYY')}</span>
      break
    default: // Day
      rangeLabel = <span>{dayjs(start).format('DD MMM YYYY')}</span>
      break
  }

  return rangeLabel
}

export default ({ dateRange, setDateRange, perspective, setPerspective }) => {
  const setNextDateRange = () => {
    console.log('setNextDateRange')
  }

  const setPreviousDateRange = () => {
    console.log('setPreviousDateRange')
  }

  const openCalendarControlMenu = () => {
    console.log('openCalendarControlMenu')
  }
  return (
    <div className='calendar-control w-full h-12 p-3 flex justify-start items-center bg-white'>
      <span className=''>
        <span className='cursor-pointer inline-block m-1' onClick={setPreviousDateRange}>
          <i className='fa fa-chevron-circle-left' />
        </span>
        <span className='cursor-pointer inline-block m-1' onClick={setNextDateRange}>
          <i className='fa fa-chevron-circle-right' />
        </span>
      </span>
      <div className='ml-4 cursor-pointer relative group' onClick={openCalendarControlMenu}>
        <DateRangeLabel {...dateRange} /> <i className='fa fa-chevron-down' />
        <div className='items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-full'>
          <a href='#asdads' className='px-4 py-2 block text-black hover:bg-grey-lighter'>View Profile</a>
          <a href='#asdfdsf' className='px-4 py-2 block text-black hover:bg-grey-lighter'>Edit Profile</a>
          <hr className='border-t mx-2 border-grey-ligght' />
          <a href='#asfasf' className='px-4 py-2 block text-black hover:bg-grey-lighter'>Logout</a>
        </div>
      </div>
    </div>
  )
}
