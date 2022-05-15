const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const carey  = await prisma.users.upsert({
      where: {user:"Gera.Alba"},
      update: {},
      create: {
        user:  "Gera.Alba",
        name: "Gerardo Alba",
        regid: 10,
        zoneLeader: true,
        email: "Gera.alba@h20.com.mx",
    },
    });
    console.log('Create fisrst user');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

