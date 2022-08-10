import * as trpc from '@trpc/server'
import { Context } from '@/server/context'
import { facultyRouter } from './routers/faculty'
import { majorRouter } from './routers/major'
import { reviewRouter } from './routers/review'
import { subjectRouter } from './routers/subject'

export const serverRouter = trpc
  .router<Context>()
  .merge('faculty.', facultyRouter)
  .merge('major.', majorRouter)
  .merge('review.', reviewRouter)
  .merge('subject.', subjectRouter)
