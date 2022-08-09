-- DropForeignKey
ALTER TABLE "Major" DROP CONSTRAINT "Major_facultyId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_majorId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectRecommendation" DROP CONSTRAINT "SubjectRecommendation_majorId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectRecommendation" DROP CONSTRAINT "SubjectRecommendation_subjectId_fkey";

-- AddForeignKey
ALTER TABLE "Major" ADD CONSTRAINT "Major_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRecommendation" ADD CONSTRAINT "SubjectRecommendation_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRecommendation" ADD CONSTRAINT "SubjectRecommendation_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
