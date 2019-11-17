import React from 'react'
import AppBar from './appbar'
import CalendarControl from './calendar-control'
import HeroContent from './hero-content'
import ContentArea from './content-area'

function App () {
  return (
    <div className='App h-screen w-screen overflow-y-auto overflow-x-hidden bg-gray-200'>
      <AppBar />
      <HeroContent />
      <CalendarControl />
      <ContentArea />
    </div>
  )
}

export default App
