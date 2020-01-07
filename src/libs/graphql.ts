import { GraphQLSchema } from 'graphql'
import { IResolvers, ITypeDefinitions, makeExecutableSchema } from 'graphql-tools'
import { join } from 'path'

import { loadContext, loadSchemas } from '@helpers/loadFiles'

interface SchemaOpts {
  ext: string
}

const path = join(__dirname, '..', 'domains')

const getSchemas = async (): Promise<ITypeDefinitions> => {
  return loadSchemas(path, '**/*.graphql')
}

const getResolvers = async (ext: string): Promise<IResolvers> => {
  const [mutations, queries, resolvers] = await Promise.all([
    loadContext(path, `**/*.mutations.${ext}`),
    loadContext(path, `**/*.queries.${ext}`),
    loadContext(path, `**/*.resolvers.${ext}`)
  ])

  return { ...mutations, ...queries, ...resolvers }
}

export const makeSchema = async ({ ext }: SchemaOpts): Promise<GraphQLSchema> => {
  const [typeDefs, resolvers] = await Promise.all([getSchemas(), getResolvers(ext)])

  return makeExecutableSchema({ typeDefs, resolvers })
}
