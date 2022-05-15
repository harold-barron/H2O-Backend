-- CreateTable
CREATE TABLE "region_animal" (
    "id_level_count" SERIAL NOT NULL,
    "id_region_animals" INTEGER NOT NULL,
    "animal_name_relation" TEXT NOT NULL,

    CONSTRAINT "region_animal_pkey" PRIMARY KEY ("id_level_count")
);

-- AddForeignKey
ALTER TABLE "region_animal" ADD CONSTRAINT "region_animal_id_region_animals_fkey" FOREIGN KEY ("id_region_animals") REFERENCES "Region1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "region_animal" ADD CONSTRAINT "region_animal_animal_name_relation_fkey" FOREIGN KEY ("animal_name_relation") REFERENCES "Animals"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
