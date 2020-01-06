import { FastifyInstance } from 'fastify'
import autoload from 'fastify-autoload'
import { join } from 'path'

export const registerModules = (app: FastifyInstance, folders: string[]): void => {
  folders.forEach((folder) => {
    const config = {
      dir: join(__dirname, folder),
      includeTypeScript: true
    }

    app.register(autoload, config).after((err: Error) => {
      if (err) return app.log.error(err)
      app.log.debug(`Server ${folder} registered.`)
    })
  })
}
