import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../auth-context'

export default ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Route {...rest} render={(props) => (
      !user.isAnonymous
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  )
}
