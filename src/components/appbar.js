import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Usermenu from './user-menu'

export default (props) => {
  return (
    <div className='appbar w-screen h-14 p-3  bg-white'>
      <div className='container mx-auto w-full h-full flex-grow-0 flex justify-between items-center'>
        <img src={logo} className='App-logo h-8 flex-none' alt='logo' />
        <nav className='hidden md:display-flex lg:display-flex'>
          <ul className='flex display-flex justify-around'>
            <li className='inline-block m-3'><Link to='Login'>Login</Link></li>
            <li className='inline-block'><Link to='calendar'>Calendar</Link></li>
          </ul>
        </nav>
        <Usermenu />
        <div className='md:hidden cursor-pointer'>
          <i className='fa fa-bars text-4xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
