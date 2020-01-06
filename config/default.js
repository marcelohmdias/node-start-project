/* eslint @typescript-eslint/no-var-requires: "off" */

const defer = require('config/defer').deferConfig
const { resolve } = require('path')

const path = resolve(__dirname, '..', `.env.${process.env.NODE_ENV}`)

require('dotenv').config({ path })

module.exports = {
  APP_NAME: process.env.APP_NAME,
  EXT: defer(() => (process.env.NODE_ENV === 'development' ? 'ts' : 'js')),
  HOST: process.env.HOST,
  IS_DEV: defer(() => process.env.NODE_ENV === 'development'),
  IS_PROD: defer(() => process.env.NODE_ENV === 'production'),
  LEVEL_LOG: process.env.LEVEL_LOG,
  NODE_ENV: process.env.NODE_ENV,
  PID: process.pid,
  PORT: process.env.PORT
}
