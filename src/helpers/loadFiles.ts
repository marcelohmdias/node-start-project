import { readFile } from 'fs'
import { IResolvers } from 'graphql-tools'
import { join } from 'path'
import { compose, curry, mergeDeepRight } from 'ramda'
import readdir from 'readdir-enhanced'

const deep = true

const makePath = curry((path: string, file: string): string => join(path, file))

const readFiles = (path: string, filter: string): Promise<Array<string>> => readdir(path, { deep, filter })

const loadContent = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

const readContentFiles = async (path: string, files: Array<string>): Promise<string[]> => {
  return Promise.all(files.map(compose(loadContent, makePath(path))))
}

const requireFiles = async (path: string, files: Array<string>): Promise<IResolvers> => {
  return files.map(makePath(path)).reduce((prev, curr) => {
    /* eslint @typescript-eslint/no-var-requires: "Off" */
    const cxt = require(`${curr}`)
    return mergeDeepRight(prev, cxt)
  }, {})
}

export const loadSchemas = async (path: string, filter: string): Promise<string> => {
  const files = await readFiles(path, filter)
  const list = await readContentFiles(path, files)
  return list.join('\n')
}

export const loadContext = async (dir: string, filter: string): Promise<IResolvers> => {
  const files = await readFiles(dir, filter)
  return requireFiles(dir, files)
}
