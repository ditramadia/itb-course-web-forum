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
  .query('search', {
    input: z.object({
      keyword: z.string().optional(),
      majorId: z.number().optional(),
      type: z.nativeEnum(SubjectType).optional(),
    }),
    resolve: async ({ input, ctx }) => {
      const { keyword, ...rest } = input
      return (
        await ctx.prisma.subject.findMany({
          where: {
            ...rest,
            name: {
              contains: keyword,
            },
          },
          include: {
            reviews: {
              select: {
                rateAssignment: true,
                rateMaterial: true,
                rateRecommendation: true,
              },
            },
          },
        })
      ).map((subject) => {
        const assignmentNNull = subject.reviews.filter(
          (review) => review.rateAssignment !== null,
        )
        const assginmentSum = assignmentNNull
          .map((review) => review.rateAssignment!)
          .reduce((total, next) => total + next, 0)

        const materialNNull = subject.reviews.filter(
          (review) => review.rateMaterial !== null,
        )
        const materialSum = materialNNull
          .map((review) => review.rateMaterial!)
          .reduce((total, next) => total + next, 0)

        const recommendationNNull = subject.reviews.filter(
          (review) => review.rateRecommendation !== null,
        )
        const recommendationSum = recommendationNNull
          .map((review) => review.rateRecommendation!)
          .reduce((total, next) => total + next, 0)

        return {
          ...subject,
          rateSummary: {
            assignment: {
              sum: assginmentSum,
              count: assignmentNNull.length,
            },
            material: {
              sum: materialSum,
              count: materialNNull.length,
            },
            recommendation: {
              sum: recommendationSum,
              count: recommendationNNull.length,
            },
          },
        }
      })
    },
  })
  .mutation('insertOne', {
    input: z.object({
      name: z.string(),
      code: z.string(),
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
      code: z.string().optional(),
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
