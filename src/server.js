import fastify from 'fastify'

import { logger } from './lib/pino.js'

import { 
  routerLoader, 
  swaggerLoadder 
} from './loaders/index.js'

const app = fastify({
  logger,
  disableRequestLogging: true
})

app.addHook('preHandler', (request, reply, done) => {
  const requestInfo = {
    reqId: request.id,
    method: request.method,
    url: request.routeOptions.url,
    path: request.routeOptions.path,
    parameters: request.params,
    headers: request.headers,
    body: request.body ? request.body : undefined
  }

  logger.info(requestInfo, 'request received')

  done()
})

app.addHook('onSend', (request, reply, payload) => {
  let body = null

  try {
    body = JSON.parse(payload)
  } catch (err) {
    logger.error(err)
  }

  const responseInfo = {
    reqId: request.id,
    headers: typeof reply.getHeaders === 'function'
      ? reply.getHeaders()
      : {},
    body
  }

  logger.info(responseInfo, 'response sent')
})

try {
  await swaggerLoadder().load(app)
  await routerLoader().load(app)

  await app.listen({
    port: 3001
  })
} catch (err) {
  console.log(err)
  process.exit(1)
}