import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../auth-context'

export default () => {
  let { user, logout } = useContext(AuthContext)

  return user.isAnonymous
    ? (<Link to="/login"><button className='btn' href='/login'>Login</button></Link>)
    : (
      <div className='usermenu hidden md:inline-block relative group z-50'>
        <div className='h-12'>
          <img className='avatar rounded-full w-12 h-12 cursor-pointer'
            src={user.photo}
            alt='avatar' />
          <div className='items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-auto absolute right-0 top-0'>
            <div className='px-4 py-2 block text-black flex flex-row items-center w-56'>
              <img className='avatar rounded-full w-12 h-12 mr-3 cursor-pointer'
                src={user.photo}
                alt='avatar' />
              {user.name}
            </div>
            <hr className='border-t mx-2 border-grey-light' />
            <a className='px-4 py-2 block text-black hover:bg-gray-300'
              href='#none'
              onClick={() => logout()}>
              Logout
            </a>
          </div>
        </div>
      </div>
    )
}
