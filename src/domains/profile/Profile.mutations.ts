import { db } from './data'

interface Profile {
  id: string
  description: string
  role: string
}

const newProfile = (_: unknown, { payload }: { [key: string]: Profile }): Profile => {
  const newProfile = {
    id: (db().length + 1).toString(),
    description: payload.description,
    role: payload.role
  }
  db().push(newProfile)

  return newProfile
}

export const Mutation = {
  newProfile
}
