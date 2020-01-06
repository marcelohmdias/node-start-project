interface User {
  id: string
  name: string
  email: string
  profile: string
}

const list: Array<User> = [
  {
    id: '1',
    name: 'Usuário 1',
    email: 'usuari_1@email.com',
    profile: '1'
  },
  {
    id: '2',
    name: 'Usuário 2',
    email: 'usuari_2@email.com',
    profile: '2'
  },
  {
    id: '3',
    name: 'Usuário 3',
    email: 'usuari_3@email.com',
    profile: '1'
  },
  {
    id: '4',
    name: 'Usuário 4',
    email: 'usuari_4@email.com',
    profile: '3'
  },
  {
    id: '5',
    name: 'Usuário 5',
    email: 'usuari_5@email.com',
    profile: '2'
  }
]

export const db = (): Array<User> => list
