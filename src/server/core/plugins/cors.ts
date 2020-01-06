import { FastifyInstance } from 'fastify'
import cors from 'fastify-cors'
import fp from 'fastify-plugin'

const fastifyCors = (app: FastifyInstance, opts: unknown, next: Function): void => {
  app.register(cors)

  next()
}

export default fp(fastifyCors, { name: 'cors' })
