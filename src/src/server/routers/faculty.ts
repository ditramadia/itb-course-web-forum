import * as trpc from '@trpc/server'
import { Context } from '../context'
import { z } from 'zod'

export const facultyRouter = trpc
  .router<Context>()
  .query('findAll', {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.faculty.findMany()
    },
  })
  .mutation('insertOne', {
    input: z.object({
      name: z.string(),
      acronym: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.faculty.create({
        data: input,
      })
    },
  })
  .mutation('updateOne', {
    input: z.object({
      id: z.number(),
      name: z.string().optional(),
      acronym: z.string().optional(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input

      return await ctx.prisma.faculty.update({
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
      return await ctx.prisma.faculty.delete({
        where: {
          id: input.id,
        },
      })
    },
  })
