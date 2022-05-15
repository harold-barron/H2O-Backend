-- CreateTable
CREATE TABLE "Animals" (
    "name" TEXT NOT NULL,
    "id_animal_dangerlevel" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "link_image" TEXT NOT NULL,
    "id_region_animal" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Animals_name_key" ON "Animals"("name");

-- AddForeignKey
ALTER TABLE "Animals" ADD CONSTRAINT "Animals_id_region_animal_fkey" FOREIGN KEY ("id_region_animal") REFERENCES "Region1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animals" ADD CONSTRAINT "Animals_id_animal_dangerlevel_fkey" FOREIGN KEY ("id_animal_dangerlevel") REFERENCES "dangerlevel"("id_level") ON DELETE RESTRICT ON UPDATE CASCADE;
