import { FastifyInstance } from 'fastify'
import helmet from 'fastify-helmet'
import fp from 'fastify-plugin'

const fastifyHelmet = (app: FastifyInstance, opts: unknown, next: Function): void => {
  app.register(helmet)

  next()
}

export default fp(fastifyHelmet, {
  name: 'helmet'
})
