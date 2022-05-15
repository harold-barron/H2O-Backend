const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const vulnerableSpecies = await prisma.dangerlevel.upsert({
      where: { id_level:1 },
      update: {},
      create: {
        name: 'Especies vulnerables',
		level_description: "Las especies dentro de este rango son aquellas que presentan una disminución entre el 30-50% de su población"
      },
    });
    const dangerOfExtinction = await prisma.dangerlevel.upsert({
        where: {id_level:2 },
        update: {},
        create: {
          name: 'Especies en peligro de extincion',
          level_description: "Las especies dentro de este rango son aquellas que presentan una disminución entre el 50-70% de su población"
        },
      });
    const criticDangerOfExtinction = await prisma.dangerlevel.upsert({
        where: {id_level:3 },
        update: {},
        create: {
          name: 'Especies en peligro de extincion crítico',
          level_description: "Las especies dentro de este rango son aquellas que presentan una disminución mayor al 80% de su población"
        },
      }); 
    
    const wildState = await prisma.dangerlevel.upsert({
        where: { id_level:4 },
        update: {},
        create: {
          name: 'Especie extinta en estado silvestre',
          level_description: " La especie sólo existe en cautiverio o fuera de su área de distribución establecida."
        },
      });  
    const extinct = await prisma.dangerlevel.upsert({
        where: {id_level:5 },
        update: {},
        create: {
          name: 'Especie extinta ',
          level_description: "No se registra que exista un solo animal de su especie"
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

