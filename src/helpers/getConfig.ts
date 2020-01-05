import { props } from 'ramda'
import { IConfig } from 'config'

type Config = {
  [key: string]: string
}

export const getConfig = (config: IConfig, ...keys: string[]): string[] => {
  return props(
    keys,
    keys.reduce((prev: Config, curr: string): Config => {
      return {
        ...prev,
        [curr]: config.get(curr)
      }
    }, {})
  )
}
