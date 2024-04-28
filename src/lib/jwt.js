import jwt from 'jsonwebtoken'

// Variaveis de ambiente
// TODO: Colocar isso em env (DESAFIO para VC!)
const JWT_SECRET = 'supersecret'

export async function verify(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (err) {
    console.log(err)
    return false
  }
}

export async function sign(payload) {
  return jwt.sign(payload, JWT_SECRET)
}
