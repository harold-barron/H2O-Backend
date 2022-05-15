const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const California = await prisma.region1.upsert({
      where: { id:10 },
      update: {},
      create: {
        name:"Golfo de California"
    },
    });
    const golfoMexico = await prisma.region1.upsert({
        where: { id:11},
        update: {},
        create: {
          name:"Golfo de México"
      },
      });
    const costaPasifico = await prisma.region1.upsert({
        where: { id:12 },
        update: {},
        create: {
          name:"Costa del Pacífico Norte"
      },
      });
    const costaMexicana = await prisma.region1.upsert({
        where: { id:13 },
        update: {},
        create: {
          name:"Costas mexicanas"
      },
      });
    const norteVeracruz = await prisma.region1.upsert({
        where: { id:14 },
        update: {},
        create: {
          name:"Norte de Veracruz"
      },
      });
    const extinct = await prisma.region1.upsert({
        where: { id:15},
        update: {},
        create: {
          name:"Extinto"
      },
      });
    
    console.log('Create regions');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
