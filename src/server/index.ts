import { createApp } from './app'

interface AppBootstrap {
  bootstrap(): void
}

export const createApplication = async (): Promise<AppBootstrap> => {
  const app = await createApp()

  return {
    bootstrap: (): void => app.container.resolve('bootstrap')
  }
}
