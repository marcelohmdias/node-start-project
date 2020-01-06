import { buildSchema, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools'
import { join } from 'path'

import { loadContext, loadSchemas } from '@helpers/loadFiles'

const path = join(__dirname, '..', 'domains')

export const getSchemas = async (): Promise<GraphQLSchema> => {
  const gql = await loadSchemas(path, '**/*.graphql')

  return buildSchema(`${gql}`)
}

export const getResolvers = async (ext: string): Promise<IResolvers> => {
  const [mutations, queries, resolvers] = await Promise.all([
    loadContext(path, `**/*.mutations.${ext}`),
    loadContext(path, `**/*.queries.${ext}`),
    loadContext(path, `**/*.resolvers.${ext}`)
  ])

  return { ...mutations, ...queries, ...resolvers }
}
