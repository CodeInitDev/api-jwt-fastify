import argon2 from 'argon2'

export async function verify(hash, password) {
  try {
    return argon2.verify(hash, password)
  } catch (err) {
    console.log(err)
    return false
  }
}

export async function hash(password) {
  try {
    return argon2.hash(password)
  } catch (err) {
    console.log(err)
    return false
  }
} 