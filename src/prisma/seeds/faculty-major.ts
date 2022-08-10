import { PrismaClient } from '@prisma/client'
import data from './faculty-major-data.json'

const seeder = async (prisma: PrismaClient) => {
  let counter = 0

  await Promise.all(
    data.map(async (each) => {
      const { majors, ...rest } = each

      await prisma.faculty.create({
        data: {
          ...rest,
          majors: {
            create: majors,
          },
        },
      })

      counter++
    }),
  )

  console.log(`Added ${counter} faculty-major data`)
}

export default seeder
