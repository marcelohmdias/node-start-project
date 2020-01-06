import { AwilixContainer, createContainer, InjectionMode, Resolver } from 'awilix'

type Modules = {
  [key: string]: Resolver<unknown>
}

const injectionMode = InjectionMode.PROXY

export const makeConatiner = (): AwilixContainer => {
  return createContainer({ injectionMode })
}

export const registerResolvers = (container: AwilixContainer, modules: Modules): AwilixContainer => {
  return Object.keys(modules).reduce((container, name) => {
    return container.register(name, modules[name])
  }, container)
}
