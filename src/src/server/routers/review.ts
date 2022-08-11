import * as trpc from '@trpc/server'
import { Context } from '@/server/context'
import { z } from 'zod'

export const reviewRouter = trpc
  .router<Context>()
  .query('findOnSubject', {
    input: z.object({
      subjectId: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.review.findMany({
        where: {
          subjectId: input.subjectId,
        },
      })
    },
  })
  .mutation('insertOne', {
    input: z.object({
      description: z.string(),
      challenge: z.string().optional(),
      advice: z.string().optional(),
      lecturer: z.string().optional(),
      rateMaterial: z.number().optional(),
      rateAssignment: z.number().optional(),
      rateRecommendation: z.number().optional(),
      voteCount: z.number().default(0),
      subjectId: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.review.create({
        data: input,
      })
    },
  })
  .mutation('updateOne', {
    input: z.object({
      id: z.number(),
      description: z.string().optional(),
      challenge: z.string().optional(),
      advice: z.string().optional(),
      lecturer: z.string().optional(),
      rateMaterial: z.number().optional(),
      rateAssignment: z.number().optional(),
      rateRecommendation: z.number().optional(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...data } = input
      return await ctx.prisma.review.update({
        where: {
          id,
        },
        data,
      })
    },
  })
  .mutation('deleteOne', {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.review.delete({
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
