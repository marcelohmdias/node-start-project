interface Profile {
  id: string
  description: string
  role: string
}

const list: Array<Profile> = [
  {
    id: '1',
    description: 'Adiminstrador',
    role: 'ADM'
  },
  {
    id: '2',
    description: 'Iniciante',
    role: 'INI'
  },
  {
    id: '3',
    description: 'Avançado',
    role: 'AVA'
  }
]

export const db = (): Array<Profile> => list
