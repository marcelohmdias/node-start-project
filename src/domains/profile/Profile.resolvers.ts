import { db } from './../user/data'

interface User {
  id: string
  name: string
  email: string
}

const users = ({ id }: { [key: string]: string }): Array<User> => {
  return db().filter((item) => item.profile === id)
}

export const Profile = {
  users
}
