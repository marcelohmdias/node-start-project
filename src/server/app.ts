import config from 'config'
import { asFunction, asValue, AwilixContainer } from 'awilix'
import { FastifyInstance } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'

import { getConfig } from '@helpers/getConfig'

import { makeLogger } from '@/libs/logger'
import { makeConatiner, registerResolvers } from '@/libs/container'
import { initApp } from './core/bootstrap'
import { makeServer } from './core/server'

type Application = {
  container: AwilixContainer
  server: FastifyInstance<Server, IncomingMessage, ServerResponse>
}

export const createApp = async (): Promise<Application> => {
  const [level, name] = getConfig(config, 'LEVEL_LOG', 'APP_NAME')

  const container = makeConatiner()

  const logger = makeLogger({ level, name })

  const server = makeServer({ logger }, container)

  registerResolvers(container, {
    bootstrap: asFunction(initApp),
    config: asValue(config),
    logger: asValue(logger)
  })

  return { container, server }
}
