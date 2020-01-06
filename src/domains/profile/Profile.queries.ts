import { db } from './data'

interface Profile {
  id: string
  description: string
  role: string
}

const profile = (_: unknown, { id }: { [key: string]: string }): Profile => {
  return db().filter((item) => item.id === id)[0]
}

const profiles = (): Array<Profile> => {
  return db()
}

export const Query = {
  profile,
  profiles
}
