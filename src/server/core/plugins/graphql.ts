import { FastifyInstance } from 'fastify'
import gql from 'fastify-gql'
import fp from 'fastify-plugin'

import { getSchemas, getResolvers } from '@libs/graphql'

import { AppContainer } from '@interfaces/ApplicationContainer'

const fastifyGql = async (app: FastifyInstance, opts: unknown, next: Function): Promise<void> => {
  const config = app.container.resolve<AppContainer['config']>('config')

  const [schema, resolvers] = await Promise.all([getSchemas(), getResolvers(config.get('EXT'))])

  const graphiql = config.get('IS_DEV') ? 'playground' : false

  app.register(gql, {
    prefix: '/api',
    graphiql,
    resolvers,
    schema
  })

  next()
}

export default fp(fastifyGql, { name: 'gql' })
