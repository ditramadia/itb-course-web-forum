import { serverRouter } from '@/server/router'
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { createContext } from '@/server/context'

export default createNextApiHandler({
  router: serverRouter,
  createContext,
})
