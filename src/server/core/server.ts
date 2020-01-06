import { asValue, AwilixContainer } from 'awilix'
import fastify, { FastifyInstance, ServerOptions } from 'fastify'

import { registerModules } from './register'

interface ServerResult {
  container: AwilixContainer
  server: FastifyInstance
}

export const makeServer = (opts: ServerOptions, container: AwilixContainer): ServerResult => {
  const server = fastify({ ...opts })

  // Applying redundant access
  server.decorate('container', container)
  container.register('app', asValue(server))

  // Register all modules with plugins
  registerModules(server, ['hooks', 'plugins'])

  return { container, server }
}
