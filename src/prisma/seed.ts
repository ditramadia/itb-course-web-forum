import { PrismaClient } from '@prisma/client'
import { default as facultySeeder } from './seeds/faculty-major'
import { default as subjectSeederFaker } from './seeds/subject-review-faker'

const prisma = new PrismaClient()

const main = async () => {
  await facultySeeder(prisma)
  await subjectSeederFaker(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
