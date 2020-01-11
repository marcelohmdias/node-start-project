import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'

const onSendHandler = (app: FastifyInstance, opts: unknown, next: Function): void => {
  app.addHook('onSend', (req, rep, payload, next) => {
    rep.header('X-Response-Time', rep.getResponseTime())
    next()
  })

  next()
}

export default fp(onSendHandler, { name: 'on-send' })
