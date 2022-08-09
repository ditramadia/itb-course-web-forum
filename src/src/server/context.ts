import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  const prisma = global.prisma || new PrismaClient()

  if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma
  }

  return { prisma }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
