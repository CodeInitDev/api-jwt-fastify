import { endpoint } from './endpoint.js'

export default {
  method: 'GET',
  url: '/ping',
  handler: endpoint,
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          ping: { type:'string' }
        }
      }
    }
  }
}