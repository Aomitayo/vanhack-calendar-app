export const canApplyToEvent = (getApplicants, event, participant, today) => {
  return event.requiresApplication &&
    event.start > today &&
    event.deadline > today &&
    getApplicants(event).indexOf(participant.email) === -1
}

export const canUnapplyFromEvent = (getApplicants, event, participant, today) => {
  return event.requiresApplication &&
    getApplicants(event).indexOf(participant.email) !== -1
}

export const canAttendEvent = (checkPermissions, getAttendees, event, participant, today) => {
  if (event.requiresApplication) {
    return false
  }
  if (event.premiumOnly && !checkPermissions(participant, 'premiumCandidate')) {
    return false
  }
  return event.start > today && getAttendees(event).indexOf(participant.email) === -1
}

export const canUnattendEvent = (checkPermissions, getAttendees, event, participant, today) => {
  if (event.requiresApplication) {
    return false
  }
  if (event.premiumOnly && !checkPermissions(participant, 'premiumCandidate')) {
    return false
  }
  return event.end > today && getAttendees(event).indexOf(participant.email) !== -1
}

export const shouldJoin = (checkPermissions, getAttendees, event, participant, today) => {
  return event.start <= today && canUnattendEvent(checkPermissions, getAttendees, event, participant, today)
}

export const shouldOfferPremium = (checkPermissions, event, participant) => {
  return event.premiumOnly && !checkPermissions(participant, 'staff') && !checkPermissions(participant, 'premiumCandidate')
}

export const applyToEvent = (getApplicants, event, participant, today) => {
  if (canApplyToEvent(getApplicants, event, participant, today)) {
    const applicants = getApplicants(event) || []
    return { applicants: [].concate(applicants, participant.email) }
  } else {
    throw new Error('The applicant is not eligible to apply')
  }
}

export const unApplyToEvent = (getApplicants, event, participant, today) => {
  if (canUnapplyFromEvent(getApplicants, event, participant, today)) {
    const applicants = getApplicants(event) || []
    const participantIndex = applicants.indexOf(participant.email)

    return { applicants: [].concat(applicants).splice(participantIndex, 1) }
  } else {
    throw new Error('The applicant is not eligible to unapply')
  }
}

export const attendEvent = (checkPermissions, event, participant, today) => {
}

export const unAttendEvent = (checkPermissions, event, participant) => {
}

export const participationStatus = (checkPermissions, event, participant) => {
  const today = new Date()
  const getApplicants = event => event.applicants || []
  const getAttendees = event => event.attendees || []

  return {
    canApplyToEvent: canApplyToEvent(getApplicants, event, participant, today),
    canUnapplyFromEvent: canUnapplyFromEvent(getApplicants, event, participant, today),
    canAttendEvent: canAttendEvent(checkPermissions, getAttendees, event, participant, today),
    canUnattendEvent: canUnattendEvent(checkPermissions, getAttendees, event, participant, today),
    shouldJoin: shouldJoin(checkPermissions, getAttendees, event, participant, today),
    shouldOfferPremium: shouldOfferPremium(checkPermissions, event, participant)
  }
}
