export const canApply = (today, user, event, applicants) => {
  return event.requiresApplication && event.start > today && event.deadline > today && applicants.indexOf(user.email) === -1
}

export const canUnapply = (today, user, event, applicants) => {
  return event.requiresApplication && applicants.indexOf(user.email) !== -1
}

export const canAttend = (today, user, event, participants, hasRole) => {
  if (event.premiumOnly && !hasRole(user, 'premiumCandidate')) {
    return false
  }

  return event.end > today && participants.indexOf(user.email) !== -1
}

export const canJoin = (today, user, event, participants) => {
  return event.end > today && participants.indexOf(user.email) !== -1
}

export const shouldJoin = (today, user, event, participants) => {
  return event.start <= today && participants.indexOf(user.email) !== -1
}

export const offerPremium = (today, user, event, hasRole) => {
  return event.premiumOnly && !hasRole(user, 'staff') && !hasRole(user, 'premiumCandidate')
}

export const participation = (user, event, hasRole) => {
  const today = new Date()
  const applicants = event.applicants || []
  const participants = event.participants || []

  return {
    canApply: canApply(today, user, event, applicants),
    canUnapply: canUnapply(today, user, event, applicants),
    canAttend: canAttend(today, user, event, participants, hasRole),
    canJoin: canJoin(today, user, event, participants),
    shouldJoin: shouldJoin(today, user, event, participants),
    offerPremium: offerPremium(today, user, event, hasRole)
  }
}
