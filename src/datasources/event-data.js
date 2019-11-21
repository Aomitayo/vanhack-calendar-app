import { events } from './sample-event-data'

export default async ({ offset, limit }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let results = events.slice(offset, offset + limit)
      resolve({
        data: results,
        meta: {
          count: results.length,
          offset: offset,
          limit: limit
        }
      })
    }, 800)
  })
}
