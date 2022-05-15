const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const carey  = await prisma.region_animal.upsert({
            where: {id_level_count:1},
            update: {},
            create: {
                id_region_animals:11,
                animal_name_relation:"Tortuga Carey",
            },
        });
        console.log("Create danger level types");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();

