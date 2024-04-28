import { endpoint } from './endpoint.js'

export default {
  method: 'POST',
  url: '/auth',
  handler: endpoint,
  schema: {
    body: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' },
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          accessToken: { type:'string' }
        }
      },
      401: {
        type: 'object',
        properties: {
          error: { type:'string' }
        }
      }
    }
  }
}