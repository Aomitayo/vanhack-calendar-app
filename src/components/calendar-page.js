import React, { useState, Fragment, useContext } from 'react'
import EventCard from '../components/event-card'
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
      <div className='hero-event container mx-auto mb-4 shadow br-1 flex flex-col relative z-0'>
        <img className='w-full z-0'
          src='https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/relocation-summit-2019.png' alt='' />
        <div className='flex flex-row justify-start items-center p-4 absolute bottom-0 bg-white w-full'>
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

      <div ref={stickyRef} className='container mx-auto z-50'>
        {
          !stuckToTop && <div className='bg-white'>
            <div className="container mx-auto">
              <div className='h-12 p-3 font-bold text-xl '>
                Happening here on Vanhack!
              </div>
            </div>
          </div>
        }
        {
          stuckToTop &&
          <div className={(stuckToTop ? 'fixed top-0 left-0 w-screen bg-white' : 'w-full')}>
            <div className='container mx-auto'>
              <CalendarControl {...{ dateRange, setDateRange, perspective, setPerspective }} />
            </div>
          </div>
        }
      </div>

      <div
        className='p-2 flex-grow md:flex items-start flex-wrap expand container mx-auto'
      >

        {items.map(item => (
          <Fragment key={item.id} >
            <div className='event md:w-1/2 lg:w-1/4 flex-none py-6  md:p-3'>
              <EventCard event={item} />
            </div>
          </Fragment>
        ))}
        { isLoading && <LoadingNotification /> }
      </div>
    </div>
  )
}

const LoadingNotification = () => {
  return (
    <div className='h-14 bg-white w-full fixed bottom-0 p-3 flex flex-row items-center justify-center'>
      <span className='fa-2x mr-3'><i className='fa fa-circle-notch fa-pulse text-blue-500' /></span> Loading...
    </div>
  )
}
