import { db } from './data'

interface User {
  id: string
  name: string
  email: string
}

const newUser = (_: unknown, { payload }: { [key: string]: User }): User => {
  const newUser = {
    id: (db().length + 1).toString(),
    email: payload.email,
    name: payload.name
  }
  db().push(newUser)

  return newUser
}

export const Mutation = {
  newUser
}
