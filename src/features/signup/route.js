import { endpoint } from './endpoint.js'

export default {
  method: 'POST',
  url: '/signup',
  handler: endpoint,
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type:'string' }
        }
      },
      400: {
        type: 'object',
        properties: {
          error: { type:'string' }
        }
      }
    }
  }
}