import { getConfig } from '@helpers/getConfig'

import { AppContainer } from '@interfaces/ApplicationContainer'

export const initApp = async ({ app, config, logger }: AppContainer): Promise<void> => {
  try {
    const [host, pid, port] = getConfig(config, 'HOST', 'PID', 'PORT')

    await app.listen(+port, host)

    logger.info(`Server listening on PORT: ${port} and PID: ${pid}.`)
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}
