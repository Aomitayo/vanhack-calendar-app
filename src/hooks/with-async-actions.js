import { useState } from 'react'

export default (actions) => {
  const [inProgress, setInProgress] = useState(false)
  const [failed, setFailed] = useState(false)
  const [reasonFailed, setReasonFailed] = useState(null)

  const wrappedActions = Object.entries(actions).reduce((a, [actionName, actionFn]) => {
    return {
      ...a,
      [actionName]: (...args) => {
        setInProgress(true)
        setFailed(false)
        setReasonFailed(null)

        return actionFn(...args)
          .catch(err => {
            setFailed(true)
            setReasonFailed(err)
          })
          .finally(() => {
            setInProgress(false)
          })
      }
    }
  })

  return {
    inProgress,
    failed,
    reasonFailed,
    ...wrappedActions
  }
}
