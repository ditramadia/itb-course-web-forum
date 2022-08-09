/*
  Warnings:

  - You are about to drop the `SubjectRecommendation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubjectRecommendation" DROP CONSTRAINT "SubjectRecommendation_majorId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectRecommendation" DROP CONSTRAINT "SubjectRecommendation_subjectId_fkey";

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "semester" SMALLINT;

-- DropTable
DROP TABLE "SubjectRecommendation";
