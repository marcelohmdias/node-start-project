import { IConfig } from 'config'
import { FastifyInstance } from 'fastify'
import { GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools'
import { Logger } from 'pino'

export interface AppContainer {
  app: FastifyInstance
  config: IConfig
  logger: Logger
  resolvers: IResolvers
  schema: GraphQLSchema
}
