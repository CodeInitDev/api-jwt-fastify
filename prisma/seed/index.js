import { prisma } from '../../src/lib/prisma.js'

async function main() {
  await prisma.user.create({
    data: {
      name: 'John Doe',
      username: 'john.doe',
      password: 'segredo'
    }
  })
}

main()