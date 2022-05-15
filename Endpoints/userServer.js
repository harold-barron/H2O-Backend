const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/Users',async(req,res) =>
{
  const allUseres = await prisma.users.findMany({});
  res.json(allUseres);
})

app.get('/Users/:user', async (req, res) => {
  const user = req.params.user; 
  console.log(user)
  const oneUser = await prisma.users.findUnique({where: {user: user}});
  res.json(oneUser);
});

app.post('/Users', async (req, res) => {
  const newUser = {
    user: req.body.user,
    name: req.body.name,
    regid:req.body.regid,
    zoneLeader:false,
    email: req.body.email,
   };
  const message = 'Usuario creado.';
  await prisma.users.create({data: newUser});
  return res.json({message});
});