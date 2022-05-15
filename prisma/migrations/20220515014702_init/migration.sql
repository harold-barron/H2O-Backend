/*
  Warnings:

  - You are about to drop the `region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "region";

-- CreateTable
CREATE TABLE "dangerlevel" (
    "id_level" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "level_description" TEXT NOT NULL,

    CONSTRAINT "dangerlevel_pkey" PRIMARY KEY ("id_level")
);
