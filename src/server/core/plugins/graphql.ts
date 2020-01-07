import { FastifyInstance } from 'fastify'
import gql from 'fastify-gql'
import fp from 'fastify-plugin'

import { makeSchema } from '@libs/graphql'

import { AppContainer } from '@interfaces/ApplicationContainer'

const fastifyGql = async (app: FastifyInstance, opts: unknown, next: Function): Promise<void> => {
  const config = app.container.resolve<AppContainer['config']>('config')

  const ext = config.get<string>('EXT')

  const schema = await makeSchema({ ext })

  const graphiql = config.get('IS_DEV') ? 'playground' : false

  app.register(gql, {
    jit: 1,
    prefix: '/api',
    graphiql,
    schema
  })

  next()
}

export default fp(fastifyGql, { name: 'gql' })
