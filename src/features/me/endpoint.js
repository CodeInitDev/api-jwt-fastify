export function endpoint(request, reply) {
  // TODO: Recuperar o id do token de dentro do payload e buscar os dados do usuario no banco. Retonar no JSON
  return reply.code(200)
    .send({
      id: '',
      name: '',
      username: ''
    })
}