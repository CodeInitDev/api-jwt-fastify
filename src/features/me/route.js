import { endpoint } from './endpoint.js'
import { isAuthenticathed } from '../shared/isAuthenticathed.js'

export default {
  method: 'GET',
  url: '/me',
  preHandler: isAuthenticathed,
  handler: endpoint,
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type:'string' },
          name: { type:'string' },
          username: { type:'string' }
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