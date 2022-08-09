import * as trpc from '@trpc/server'
import { Context } from '@/server/context'
import { z } from 'zod'
import { SubjectType } from '@prisma/client'

export const subjectRouter = trpc
  .router<Context>()
  .query('findAll', {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.subject.findMany({
        include: {
          major: true,
        },
      })
    },
  })
  .query('findOne', {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.subject.findFirst({
        where: {
          id: input.id,
        },
        include: {
          major: true,
          reviews: true,
        },
      })
    },
  })
  .mutation('insertOne', {
    input: z.object({
      name: z.string(),
      description: z.string(),
      credits: z.number(),
      type: z.nativeEnum(SubjectType),
      majorId: z.number(),
      semester: z.number().optional(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.subject.create({
        data: input,
      })
    },
  })
  .mutation('updateOne', {
    input: z.object({
      id: z.number(),
      name: z.string().optional(),
      description: z.string().optional(),
      credits: z.number().optional(),
      type: z.nativeEnum(SubjectType).optional(),
      majorId: z.number().optional(),
      semester: z.number().optional(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input
      return await ctx.prisma.subject.update({
        where: {
          id,
        },
        data: rest,
      })
    },
  })
  .mutation('deleteOne', {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.subject.delete({
        where: {
          id: input.id,
        },
      })
    },
  })
  .mutation('incrementVote', {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      const currentReview = await ctx.prisma.review.findFirstOrThrow({
        where: {
          id: input.id,
        },
      })

      return await ctx.prisma.review.update({
        where: {
          id: input.id,
        },
        data: {
          voteCount: currentReview.voteCount + 1,
        },
      })
    },
  })
