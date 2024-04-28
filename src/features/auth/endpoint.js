import { prisma } from '../../lib/prisma.js'
import { verify } from '../../lib/argon2.js'
import { sign } from '../../lib/jwt.js'

const validteUserAndPassword = async (user, password) => {
  return user && await verify(user.password, password)
}

export async function endpoint(request, reply) {
  const { username, password } = request.body

  const user = await prisma.user.findFirst({
    where: {
      username
    }
  })

  const isValidCredentials = await validteUserAndPassword(user, password)

  if (!isValidCredentials) {
    return reply.code(401)
      .send({
        error: 'Invalid credentials'
      })
  }

  const accessToken = await sign({
    id: user.id
  })

  return reply.code(200)
    .send({
      accessToken
    })
}