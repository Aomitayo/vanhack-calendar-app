import React, { useState } from 'react'

const AuthContext = React.createContext()

AuthContext.displayName = 'AuthContext'

export default AuthContext

const anonymousUser = {
  name: 'Guest',
  isAnonymous: true,
  roles:[]
}

function AuthProvider (props) {
  const [user, setUser] = useState(anonymousUser)
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

  const hasRole = (role) => (user.roles || []).indexOf(role) !== -1

  return (
    <AuthContext.Provider value={{ user, loginInProgress, loginFailed, reasonLoginFailed, hasRole, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }

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
  candidate: { name: 'John Candidate', email: 'john@example.com', password: 'john' },
  premiumCandidate: { name: 'Martha Moneypenny', email: 'martha@workplace.com', password: 'martha' },
  staff: { name: 'Santiago Cto', email: 'tiago@vanhack.com', password: 'tiago.cto' }
}