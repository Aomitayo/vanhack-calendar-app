import React, { useContext, useState } from 'react'
import AuthContext from '../auth-context'

export default (props) => {
  const { loginInProgress, loginFailed, reasonLoginFailed, login } = useContext(AuthContext)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <div
      className='flex-grow flex flex-col items-center justify-center bg-gray-200'
    >
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        {loginFailed && <p className='text-red-500 text-xs italic'>{reasonLoginFailed}</p>}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input
            className={loginFailed ? 'error' : ''}
            id='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={evt => setUsername(evt.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className={loginFailed ? 'error' : ''}
            id='password'
            type='password'
            placeholder='******************'
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          {loginInProgress
            ? <span className='fa-2x mr-3'><i className='fa fa-circle-notch fa-pulse text-blue-500' /></span>
            : <button className='btn' type='button' onClick={() => login(username, password)} > Sign In</button>
          }
          <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#forgotten-password'>
            Forgot Password?
          </a>
        </div>
      </form>
      <p className='text-center text-gray-500 text-xs'>
        &copy;2019 vanhackathon. some rights reserved.
      </p>
    </div>
  )
}
