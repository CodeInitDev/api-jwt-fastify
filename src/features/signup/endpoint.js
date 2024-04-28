import { prisma } from '../../lib/prisma.js'
import { hash } from '../../lib/argon2.js'

export async function endpoint(request, reply) {
  const { name, username, password } = request.body

  const isUsernameAvailable = await prisma.user.count({
    where: {
      username
    }
  }) === 0

  if (!isUsernameAvailable) {
    return reply.code(400)
      .send({
        error: 'Username not available!'
      })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
      password: await hash(password)
    }
  })

  return reply.code(201)
    .send({
      id: user.id.toString()
    })
}