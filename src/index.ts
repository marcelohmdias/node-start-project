import { createApplication } from './server'

createApplication().then((app) => app.bootstrap())
