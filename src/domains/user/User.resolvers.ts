import { db } from './../profile/data'

interface Profile {
  id: string
  description: string
  role: string
}

const profiles = ({ profile }: { [key: string]: string }): Array<Profile> => {
  return db().filter((item) => item.id === profile)
}

export const User = {
  profiles
}
