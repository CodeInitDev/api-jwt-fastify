export function endpoint(_, reply) {
  return reply.code(200)
    .send({
      ping: 'Healthy!'
    })
}