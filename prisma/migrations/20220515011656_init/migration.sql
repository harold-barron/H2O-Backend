/*
  Warnings:

  - The primary key for the `Region1` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idregion` on the `Region1` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Region1" DROP CONSTRAINT "Region1_pkey",
DROP COLUMN "idregion",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Region1_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Users" (
    "user" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "regid" INTEGER NOT NULL,
    "zoneLeader" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_key" ON "Users"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_regid_fkey" FOREIGN KEY ("regid") REFERENCES "Region1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
