import { verify } from '../../lib/jwt.js'

export async function isAuthenticathed(request, reply) {
  const rawToken = request.headers?.authorization
  const tokenParts = rawToken.split('Bearer ')
  const accessToken = tokenParts?.[1]

  const payload = await verify(accessToken)

  console.log({ payload })

  if (!payload) {
    return reply.code(401)
      .send({
        error: 'Invalid token'
      })
  }
}