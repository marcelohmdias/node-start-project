import fastify, { FastifyInstance, ServerOptions } from 'fastify'
import { asValue, AwilixContainer } from 'awilix'

import { registerModules } from './register'

export const makeServer = (opts: ServerOptions, container: AwilixContainer): FastifyInstance => {
  const server = fastify({ ...opts })

  // Applying redundant access
  server.decorate('container', container)
  container.register('app', asValue(server))

  // Register all modules with plugins
  registerModules(server, ['hooks', 'plugins'])

  return server
}
