import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './auth-context'
import PrivateRoute from './components/private-route'
import NotFound from './pages/not-found'
import CalendarPage from './components/calendar-page'
import LoginPage from './components/login-page'

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={CalendarPage} />
      <PrivateRoute exact path='/calendar' component={CalendarPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

function App () {
  return (
    <AuthProvider>
      <div className='App h-screen w-screen bg-gray-200 flex flex-col'>
        { routing }
      </div>
    </AuthProvider>
  )
}

export default App
