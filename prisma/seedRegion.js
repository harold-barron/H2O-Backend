const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const bajaCalifornia = await prisma.region1.upsert({
      where: { id:1 },
      update: {},
      create: {
        name:"Baja california"
    },
    });
    const noroeste = await prisma.region1.upsert({
        where: { id:2 },
        update: {},
        create: {
          name:"Noroeste"
      },
      });
    const costaCentralPasifico = await prisma.region1.upsert({
        where: { id:3 },
        update: {},
        create: {
          name:"Costa central del Pasífico"
      },
      });
    const Oaxaca = await prisma.region1.upsert({
        where: { id:4 },
        update: {},
        create: {
          name:"Oaxaca"
      },
      });
    const tabascoChiapas = await prisma.region1.upsert({
        where: { id:5 },
        update: {},
        create: {
          name:"Tabasco y Chiapas"
      },
      });
    const yucatan = await prisma.region1.upsert({
        where: { id:6 },
        update: {},
        create: {
          name:"Penisula de Yucatán"
      },
      });
    const costaCentralGolfo = await prisma.region1.upsert({
        where: { id:7 },
        update: {},
        create: {
          name:"Costa central del Golfo"
      },
      });
    
    const noreste = await prisma.region1.upsert({
        where: { id:8 },
        update: {},
        create: {
          name:"Noreste"
      },
      });
    const extinct = await prisma.region1.upsert({
        where: { id:9 },
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
