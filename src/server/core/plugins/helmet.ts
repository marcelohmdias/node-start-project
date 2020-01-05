import fp from 'fastify-plugin'
import helmet from 'fastify-helmet'
import { FastifyInstance } from 'fastify'

const fastifyHelmet = (app: FastifyInstance, opts: unknown, next: Function): void => {
  app.register(helmet)

  next()
}

export default fp(fastifyHelmet, {
  name: 'helmet'
})
