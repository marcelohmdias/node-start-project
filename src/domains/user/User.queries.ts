import { db } from './data'

interface User {
  id: string
  name: string
  email: string
}

const user = (_: unknown, { id }: { [key: string]: string }): User => {
  return db().filter((item) => item.id === id)[0]
}

const users = (): Array<User> => {
  return db()
}

export const Query = {
  user,
  users
}
