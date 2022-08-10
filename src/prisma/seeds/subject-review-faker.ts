import { Major, PrismaClient, SubjectType } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { titleCase } from '../../src/utils/casing'
import { getRandomInteger } from '../../src/utils/random'

const generateFakeReview = () => {
  return {
    description: faker.lorem.paragraph(5),
    challenge: Math.random() < 0.25 ? undefined : faker.lorem.paragraph(),
    advice: Math.random() < 0.25 ? undefined : faker.lorem.paragraph(),
    lecturer: Math.random() < 0.25 ? undefined : faker.name.fullName(),
    rateMaterial: Math.random() < 0.25 ? undefined : getRandomInteger(1, 5),
    rateAssignment: Math.random() < 0.25 ? undefined : getRandomInteger(1, 5),
    rateRecommendation:
      Math.random() < 0.25 ? undefined : getRandomInteger(1, 5),
    voteCount: getRandomInteger(0, 50),
  }
}

const generateFakeSubject = (major: Major) => {
  const reviews: ReturnType<typeof generateFakeReview>[] = []
  const reviewCount = getRandomInteger(0, 10)

  for (let i = 0; i < reviewCount; i++) {
    reviews.push(generateFakeReview())
  }

  return {
    code: `${major.code}`.concat(
      faker.random.numeric(4, {
        allowLeadingZeros: false,
      }),
    ),
    name: titleCase(faker.lorem.words()),
    description: faker.lorem.paragraph(),
    credits: getRandomInteger(2, 4),
    semester: Math.random() < 0.25 ? undefined : getRandomInteger(1, 8),
    type: Math.random() < 0.5 ? SubjectType.COMPULSORY : SubjectType.ELECTIVE,
    reviews: {
      create: reviews,
    },
  }
}

interface SubjectProps extends ReturnType<typeof generateFakeSubject> {
  majorId: number
}

const seeder = async (prisma: PrismaClient) => {
  const majors = await prisma.major.findMany({
    include: {
      faculty: true,
    },
  })

  let subjectCounter = 0

  await Promise.all(
    majors.map(async (major) => {
      const subjects: SubjectProps[] = []

      for (let i = 0; i < 10; i++) {
        subjectCounter++
        subjects.push({ majorId: major.id, ...generateFakeSubject(major) })
      }

      await Promise.all(
        subjects.map(async (subject) => {
          await prisma.subject.create({
            data: subject,
          })
        }),
      )
    }),
  )

  console.log(`Added ${subjectCounter} subject with its reviews`)
}

export default seeder
