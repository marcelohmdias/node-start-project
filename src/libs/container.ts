import { AwilixContainer, createContainer, InjectionMode, Resolver } from 'awilix'

type Modules = {
  [key: string]: Resolver<unknown>
}

const injectionMode = InjectionMode.PROXY

export const makeConatiner = (): AwilixContainer => {
  return createContainer({ injectionMode })
}

export const registerResolvers = (container: AwilixContainer, modules: Modules): void => {
  Object.keys(modules).forEach((name) => {
    container.register(name, modules[name])
  })
}
