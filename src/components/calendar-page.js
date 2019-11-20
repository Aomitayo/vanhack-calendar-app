import React, { useState, Fragment, useContext } from 'react'
import AuthContext from '../auth-context'
import AppBar from '../components/appbar'
import CalendarControl from './calendar-control'
import useInfiniteScroll from '../hooks/use-infinite-scroll'
import useSticky from '../hooks/use-sticky'
import eventData from '../datasources/event-data'

export default () => {
  const [perspective, setPerspective] = useState('today')
  const [dateRange, setDateRange] = useState({start: new Date(), span: 'day'})

  const {
    items,
    setScroller: setInfiniteScroller,
    handleScroll: handleInfiniteScroll,
    isLoading
  } = useInfiniteScroll(eventData)

  const {
    stuckToTop,
    setScroller: setStickyScroller,
    handleScroll: handleStickyScroll,
    stickyRef
  } = useSticky()

  const setScroller = element => {
    setInfiniteScroller(element)
    setStickyScroller(element)
  }

  const handleScroll = () => {
    handleInfiniteScroll()
    handleStickyScroll()
  }

  return (
    <div
      className='flex-grow flex flex-col items-start bg-gray-200 overflow-y-scroll'
      ref={element => setScroller(element)} onScroll={handleScroll}
    >
      <AppBar />
      <div className='container mx-auto mb-4 shadow br-1 flex flex-col'>
        <img className='w-full'
          src='https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/relocation-summit-2019.png' alt='' />
        <div className='flex flex-row justify-start items-center p-4'>
          <img className='mr-6 ml-1'
            src='https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg' alt='flag' />
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <div className='font-bold text-xl mr-3'>Relocation Summit 2019</div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <div className='text-gray-600 text-sm font-semibold mr-3'>Vancouver - Canada</div>
              <div className='text-sm font-semibold mr-3'>November 27 - December 4, 2019</div>
              <div>
                <span className='text-gray-600 text-base font-semibold mr-2'>Deadline:</span>
                <span className='text-base'>11/26/2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={stickyRef} className='container mx-auto'>
        <div className={(stuckToTop ? 'fixed top-0 left-0 w-screen bg-white' : 'w-full')}>
          <div className='container mx-auto'>
            <CalendarControl {...{ dateRange, setDateRange, perspective, setPerspective }} />
          </div>
        </div>
      </div>

      <div
        className='p-3 flex-grow md:flex items-start flex-wrap expand container mx-auto'
      >

        {items.map(item => (
          <Fragment key={item.id} >
            <Event event={item} />
          </Fragment>
        ))}
        { isLoading && <LoadingNotification /> }
      </div>
    </div>
  )
}

const Event = ({ event }) => {
  const { hasRole } = useContext(AuthContext)

  return (
    <div className='event md:w-1/3 lg:w-1/4 flex-none'>
      <div className='event-wrapper my-6  md:m-3 shadow bg-white' >
        <div className='event-banner'>
          <img src={event.photo} alt='' />
        </div>
        <div className='event-summary p-3'>
          <div className='name'>{event.name}</div>
          <div className='date'>{event.start.toString()}</div>
          <div className='location'>{event.location}</div>
        </div>
        {
          hasRole('premiumCandidate')
          ? <button className='btn'>Attend</button>
            : <button className='btn'>Sign Up for Premium</button>
        }
      </div>
    </div>
  )
}

const LoadingNotification = () => {
  return (
    <div className='h-14 bg-white w-full fixed bottom-0 p-3 flex flex-row items-center justify-center'>
      <span className='fa-2x mr-3'><i className='fa fa-circle-notch fa-pulse text-blue-500'></i></span> Loading...
    </div>
  )
}
