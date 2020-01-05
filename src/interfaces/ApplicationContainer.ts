import { IConfig } from 'config'
import { FastifyInstance } from 'fastify'
import { Logger } from 'pino'

export interface AppContainer {
  app: FastifyInstance
  config: IConfig
  logger: Logger
}
