import pino from 'pino'

const redact = process.env.LOG_REDACT?.split(',')

console.log(redact)

export const logger = pino({
  level: process.env.LOG_LEVEL || 'debug',
  redact
})