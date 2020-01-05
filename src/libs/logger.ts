import pino, { Logger } from 'pino'

interface LoggerOpts {
  level: string
  name: string
}

export const makeLogger = ({ level, name }: LoggerOpts): Logger => {
  const prettyPrint = {
    ignore: 'hostname',
    translateTime: 'dd-mmm-yyyy HH:MM:ss.l',
    name
  }

  return pino({ level, prettyPrint })
}
