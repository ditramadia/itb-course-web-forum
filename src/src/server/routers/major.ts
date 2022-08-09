import * as trpc from '@trpc/server'
import { z } from 'zod'
import { Context } from '@/server/context'

export const majorRouter = trpc
  .router<Context>()
  .query('findAll', {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.major.findMany({
        include: {
          faculty: true,
        },
      })
    },
  })
  .mutation('insertOne', {
    input: z.object({
      code: z.number(),
      name: z.string(),
      acronym: z.string(),
      facultyId: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.major.create({
        data: input,
      })
    },
  })
  .mutation('updateOne', {
    input: z.object({
      id: z.number(),
      code: z.number().optional(),
      name: z.string().optional(),
      acronym: z.string().optional(),
      facultyId: z.number().optional(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input
      return await ctx.prisma.major.update({
        where: { id },
        data: rest,
      })
    },
  })
  .mutation('deleteOne', {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.major.delete({
        where: {
          id: input.id,
        },
      })
    },
  })
