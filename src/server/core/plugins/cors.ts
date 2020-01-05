import cors from 'fastify-cors'
import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'

const fastifyCors = (app: FastifyInstance, opts: unknown, next: Function): void => {
  app.register(cors)

  next()
}

export default fp(fastifyCors, {
  name: 'cors'
})
