import autoload from 'fastify-autoload'
import { join } from 'path'
import { FastifyInstance } from 'fastify'

export const registerModules = (server: FastifyInstance, folders: string[]): void => {
  folders.forEach((folder) => {
    const config = {
      dir: join(__dirname, folder),
      includeTypeScript: true
    }

    server.register(autoload, config).after((err: Error) => {
      if (err) return server.log.error(err)
      server.log.debug(`Server ${folder} registered.`)
    })
  })
}
