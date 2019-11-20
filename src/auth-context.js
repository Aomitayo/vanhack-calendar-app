/* globals sessionStorage */
import React, { useState, useEffect } from 'react'

const userSessionKey = 'vanhackathon2019_user'
const storeUser = (user) => sessionStorage.setItem(userSessionKey, JSON.stringify(user))
const getStoredUser = () => JSON.parse(sessionStorage.getItem(userSessionKey) || 'null')

const AuthContext = React.createContext()

AuthContext.displayName = 'AuthContext'

export default AuthContext

const anonymousUser = {
  name: 'Guest',
  isAnonymous: true,
  roles: [],
  photo: ''
}

function AuthProvider (props) {
  const [user, setUser] = useState(
    getStoredUser() || anonymousUser
  )
  const [loginInProgress, setLoginInProgress] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const [reasonLoginFailed, setReasonLoginFailed] = useState(null)

  const login = (username, password) => {
    setUser(anonymousUser)
    setLoginInProgress(true)
    setLoginFailed(false)
    setReasonLoginFailed(null)

    doLogin(username, password).then(user => {
      setUser(user)
    }).catch(err => {
      setLoginFailed(true)
      setReasonLoginFailed(err.message)
    }).finally(() => {
      setLoginInProgress(false)
    })
  }

  const logout = () => {
    setUser(anonymousUser)
  }

  useEffect(() => {
    storeUser(user)
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loginInProgress, loginFailed, reasonLoginFailed, hasRole: hasRole.bind(null, user), login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }

export const hasRole = (user, role) => (user.roles || []).indexOf(role) !== -1

const doLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const [role, user] = Object.entries(fakeUsers)
        .find(([role, { email, password: pword }]) => email === username && pword === password) || []
      if (user) {
        resolve({ ...user, roles: [role] })
      } else {
        reject(new Error('Incorrect username or password'))
      }
    }, 800)
  })
}

const fakeUsers = {
  candidate: {
    name: 'John Candidate',
    email: 'john@example.com',
    password: 'john',
    photo: 'https://i.pravatar.cc/100?img=14'
  },
  premiumCandidate: {
    name: 'Martha Moneypenny',
    email: 'martha@workplace.com',
    password: 'martha',
    photo: 'https://i.pravatar.cc/100?img=16'
  },
  staff: {
    name: 'Tiago Cto',
    email: 'tiago@vanhack.com',
    password: 'tiago',
    photo: 'https://ca.slack-edge.com/T0CLCJ1AM-U0CLCV30R-80f9dccba2d3-512'
  }
}
