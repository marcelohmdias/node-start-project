import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'

import { AppContainer } from '@/interfaces/ApplicationContainer'

/* eslint @typescript-eslint/no-var-requires: "off" */
const Youch = require('youch')

const serverErrorHandler = (app: FastifyInstance, opts: unknown, next: Function): void => {
  const config = app.container.resolve<AppContainer['config']>('config')

  app.setErrorHandler(
    async (err, req, rep): Promise<void> => {
      if (config.get('IS_PROD')) {
        rep.send(err)
      }

      try {
        const youch = new Youch(err, req.raw)
        const html = await youch.toHTML()
        rep.type('text/html')
        rep.send(html)
      } catch (err) {
        rep.code(500).send(err)
      }
    }
  )

  next()
}

export default fp(serverErrorHandler, {
  name: 'custom-error-page'
})
