const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const carey  = await prisma.animals.upsert({
      where: { name:"Tortuga Carey" },
      update: {},
      create: {
        name: 'Tortuga Carey',
        id_animal_dangerlevel:3,
        description: " La población total de esta especie ha disminuido hasta un 80% en los últimos años.Esta familia de tortugas son los representantes vivos de algunos reptiles que existieron hace 100 millones de años.En territorio mexicano se alberga principalmente en el Golfo de México en playas continentales e insulares de los estados de Veracruz, Campeche, Yucatán y Quintana Roo",
        link_image: "https://images.pexels.com/photos/4628309/pexels-photo-4628309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id_region_animal:11,
    },
    });
    console.log('Create danger level types');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

