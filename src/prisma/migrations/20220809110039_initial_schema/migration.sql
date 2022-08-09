-- CreateEnum
CREATE TYPE "SubjectType" AS ENUM ('COMPULSORY', 'ELECTIVE');

-- CreateTable
CREATE TABLE "Faculty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Major" (
    "id" SERIAL NOT NULL,
    "code" SMALLINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "acronym" VARCHAR(10) NOT NULL,
    "facultyId" INTEGER NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "credits" SMALLINT NOT NULL,
    "type" "SubjectType" NOT NULL DEFAULT 'COMPULSORY',
    "majorId" INTEGER NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectRecommendation" (
    "id" SERIAL NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "majorId" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "SubjectRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "challenge" TEXT,
    "advice" TEXT,
    "lecturer" VARCHAR(255),
    "rateMaterial" SMALLINT,
    "rateAssignment" SMALLINT,
    "rateRecommendation" SMALLINT,
    "voteCount" INTEGER NOT NULL DEFAULT 0,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Major" ADD CONSTRAINT "Major_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRecommendation" ADD CONSTRAINT "SubjectRecommendation_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRecommendation" ADD CONSTRAINT "SubjectRecommendation_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
