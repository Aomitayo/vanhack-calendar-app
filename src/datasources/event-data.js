import Chance from 'chance'
const chance = new Chance()

const interviewPractice = () => {
  let today = new Date()
  return {
    id: chance.guid(),
    name: 'Interview Practice',
    start: today
  }
}

export default async ({ offset, limit }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let events = []
      events = [].concat(events, chance.n(interviewPractice, 4))
      resolve({
        data: events,
        meta: {
          count: events.length,
          offset: offset,
          limit: limit
        }
      })
    }, 800)
  })
}

const events = [
  {
    name: 'Interview Practice',
    eventType: 'interview practice',
    start: new Date(),
    end: new Date('22-November-2019'),
    location: 'Zoom',
    deadline: new Date('11/03/2019')
  },
  {
    name: 'Interview Practice',
    eventType: 'interview practice',
    start: new Date(),
    end: new Date('22-November-2019'),
    location: 'Zoom',
    deadline: new Date('11/03/2019')
  },
  {
    name: 'VanHackathon',
    eventType: 'vanhackathon',
    start: new Date('15-November-2019'),
    end: new Date('22-November-2019'),
    location: 'Vancouver - Canada',
    deadline: new Date('11/03/2019')
  },
  {
    name: 'Leap Vancouver - Job Fair',
    eventType: 'leap',
    start: new Date('2-December-2019'),
    end: new Date('04-December-2019'),
    location: 'Vancouver - Canada',
    deadline: new Date('11/30/2019')
  },
  {
    name: 'Leap Ontario',
    eventType: 'leap',
    start: new Date('3-February-2020'),
    end: new Date('06-February-2020'),
    location: 'Toronto - Canada',
    deadline: new Date('01/25/2020')
  },
  {
    name: 'Leap Calgary',
    eventType: 'leap',
    start: new Date('24-February-2020'),
    end: new Date('27-February-2020'),
    location: 'Calgary - Canada',
    deadline: new Date('02/10/2020')
  },
  {
    name: 'Colombia Recruiting Mission',
    eventType: 'recruiting-mission',
    start: new Date('7-March-2020'),
    end: new Date('08-March-2020'),
    location: 'Medellín - Colombia',
    deadline: new Date('02/14/2020')
  },
  {
    name: 'Leap MTL',
    eventType: 'leap',
    start: new Date('9-March-2020'),
    end: new Date('12-March-2020'),
    location: 'Montréal - Canada',
    deadline: new Date('03/01/2020')
  },
  {
    name: 'Leap Vancouver',
    eventType: 'leap',
    start: new Date('30-March-2020'),
    end: new Date('2-April-2020'),
    location: 'Vancouver - Canada',
    deadline: new Date('03/08/2020')
  },
  {
    name: 'Relocation Summit 2019',
    eventType: 'conference',
    start: new Date('27-November-2019'),
    end: new Date('4-December-2019'),
    location: 'Vancouver - Canada',
    deadline: new Date('11/26/2019')
  }
]
