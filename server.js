const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
require('dotenv').config('.env' )

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cors = require("cors");
const cosrOptions = {
  origin:"http://localhost:8081"
}
app.use(cors(cosrOptions));

app.get("/", (req, res) => {
    res.json({message: "Conectado en adaptable"});
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

app.get("/Users",async(req,res) =>
{
    const allUseres = await prisma.users.findMany({});
    res.json(allUseres);
});

app.get("/Users/:user", async (req, res) => {
    const user = req.params.user; 
  
    const oneUser = await prisma.users.findUnique({where: {user: user}});
    res.json(oneUser);
});

app.post("/Users", async (req, res) => {
    const newUser = {
        user: req.body.user,
        name: req.body.name,
        regid:req.body.regid,
        zoneLeader:false,
        email: req.body.email,
    };
    const message = "Usuario creado.";
    await prisma.users.create({data: newUser});
    return res.json({message});
});

app.put("/Users/:user", async (req, res) => {
    const userToUpdate = req.params.user;

    await prisma.users.update({
        where: {
            user: userToUpdate
        },
        data: {
            regid:req.body.regid,
            zoneLeader: req.body.zoneLeader
        }
    });
    return res.json({message: "Usuario actualizado correctamente"});
});

app.delete("/Users/:user", async (req, res) => {
    const userToDelete = req.params.user;
    await prisma.users.delete({where: {user: userToDelete}});
    return res.json({message: "Usuario eliminado correctamente"});
});

app.get("/Animal",async(req,res) =>
{
    const allUseres = await prisma.animals.findMany({});
    res.json(allUseres);
});

app.get("/Animal/:name", async (req, res) => {
    const animalName = req.params.name; 
    const getAnimalByName = await prisma.animals.findUnique({where: {name: animalName}});
    res.json(getAnimalByName);
});
  
app.post("/Animal", async (req, res) => {
    const newSepecie = {
        name: req.body.name,
        id_animal_dangerlevel:req.body.id_animal_dangerlevel,
        description:req.body.description,
        link_image:req.body.link_image,
        id_region_animal:req.body.id_region_animal,
    };
    const message = "Nueva especie agregada.";
    await prisma.animals.create({data: newSepecie});
    return res.json({message});
}); 

app.put("/Animal/:name", async (req, res) => {
    const nameToUpdate = req.params.name;

    await prisma.animals.update({
        where: {
            name: nameToUpdate
        },
        data: {
			
            link_image: req.body.link_image     
        }
    });
    return res.json({message: "Especie actualizado correctamente"});
});



app.delete("/Animal/:name", async (req, res) => {
    const animalToDelete = req.params.name;
    await prisma.animals.delete({where: {name: animalToDelete}});
    return res.json({message: "Especie eliminada correctamente"});
});

