import dayjs from 'dayjs'
const today = new Date()
const time1 = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T08:00:00-08:00`)
const time2 = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T15:00:00-08:00`)
export const events = [
  {
    id: 'evt001',
    name: 'Interview Practice',
    eventType: 'interview practice',
    photo: 'interview-practice.jpg',
    start: time1 > today ? time1 : dayjs(time1).add(1, 'day').toDate(),
    end: new Date('22-November-2019'),
    location: 'Zoom',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    premiumOnly: true
  },
  {
    id: 'evt002',
    name: 'Interview Practice',
    eventType: 'interview practice',
    photo: 'interview-practice.jpg',
    start: time2 > today ? time2 : dayjs(time2).add(1, 'day').toDate(),
    end: new Date('22-November-2019'),
    location: 'Zoom',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    premiumOnly: true
  },
  {
    id: 'evt003',
    name: 'VanHackathon',
    eventType: 'vanhackathon',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/37478757-eef9-4cf1-b0c2-9ceb426cffaa.jpg',
    start: new Date('15-November-2019'),
    end: new Date('22-November-2019'),
    location: 'Vancouver - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('11/03/2019')
  },
  {
    id: 'evt004',
    name: 'Leap Vancouver - Job Fair',
    eventType: 'leap',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/351665ed-4492-4749-ba43-c8e58f14888e.jpg',
    start: new Date('2-December-2019'),
    end: new Date('04-December-2019'),
    location: 'Vancouver - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('11/30/2019')
  },
  {
    id: 'evt005',
    name: 'Leap Ontario',
    eventType: 'leap',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/1e2d6be2-b729-4ebb-8d0c-2c75035efbee.jpg',
    start: new Date('3-February-2020'),
    end: new Date('06-February-2020'),
    location: 'Toronto - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('01/25/2020')
  },
  {
    id: 'evt006',
    name: 'Leap Calgary',
    eventType: 'leap',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/9e7bf694-b476-4b93-8981-68c36fbc7235.jpg',
    start: new Date('24-February-2020'),
    end: new Date('27-February-2020'),
    location: 'Calgary - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('02/10/2020')
  },
  {
    id: 'evt007',
    name: 'Colombia Recruiting Mission',
    eventType: 'recruiting-mission',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/44d0f28a-9922-4ae2-9b76-bae55c817778.jpg',
    start: new Date('7-March-2020'),
    end: new Date('08-March-2020'),
    location: 'Medellín - Colombia',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('02/14/2020')
  },
  {
    id: 'evt008',
    name: 'Leap MTL',
    eventType: 'leap',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/4d8170b8-9ba6-4365-82ae-f028f02b281c.jpg',
    start: new Date('9-March-2020'),
    end: new Date('12-March-2020'),
    location: 'Montréal - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('03/01/2020')
  },
  {
    id: 'evt009',
    name: 'Leap Vancouver',
    eventType: 'leap',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/9e962cf3-8ee5-4a84-ba85-89b4340d1b09.jpg',
    start: new Date('30-March-2020'),
    end: new Date('2-April-2020'),
    location: 'Vancouver - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    requiresApplication: true,
    deadline: new Date('03/08/2020')
  },
  {
    id: 'evt010',
    name: 'Relocation Summit 2019',
    eventType: 'conference',
    photo: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/relocation-summit-2019.png',
    start: new Date('27-November-2019'),
    end: new Date('4-December-2019'),
    location: 'Vancouver - Canada',
    locationFlag: 'https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg',
    deadline: new Date('11/26/2019')
  }
]
