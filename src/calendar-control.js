import React from 'react'

export default (props) => {
  return (
    <div className='calendar-control  w-screen h-14 p-3 flex justify-between items-center bg-white'>
      <nav className='hidden md:display-flex lg:display-flex'>
        <ul className='flex display-flex justify-around'>
          <li className='inline-block'>item1</li>
          <li className='inline-block'>item2</li>
          <li className='inline-block'>item3</li>
        </ul>
      </nav>

      <div className='usermenu'>
        <div className="overflow-hidden h-12">
          <img className='avatar rounded-full w-12 h-12' src='https://i.pravatar.cc/100?img=16' alt='avatar' />
        </div>
      </div>
    </div>
  )
}
