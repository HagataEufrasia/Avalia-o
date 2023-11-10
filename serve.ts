import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

//Adiciona um cliente 
app.post("/client", async (request, response) => {
  try {
    const { name, email } = request.body;
    const client = await prisma.client.create({
      data: {
        name,
        email,
      },
    });
    return response.json(client);
  } catch {
    return response.status(400).json({ error: "CLIENTE JÁ EXISTENTE" });
  }
});

//Visualiza todos os Clientes
app.get("/client", async (request, response) => {
  const clients = await prisma.client.findMany();
  return response.json(clients);
});

//Visualiza um cliente especifio pelo id
app.get("/client/:id", async (request, response) => {
  try {
    const client = await prisma.client.findFirst({
      where: {
        id: Number(request.params.id),
      },
    });
    return response.json(client);
  } catch {
    return response.status(400).json({ error: "CLIENTE NÃO ENCONTRADO" });
  }
});


//Atualiza o cliente pelo Id
app.put("/client/:id", async (request, response) => {
  try {
    const { name, email } = request.body;
    const client = await prisma.client.update({
      data: {
        name,
        email,
      },
      where: {
        id: Number(request.params.id),
        },
      
    });
    return response.json(client);
  } catch {
    return response.status(400).json({ error: "NÃO ENCONTRADO" });
  }
});


//deleta um cliente pelo Id
app.delete("/client/:id", async (request, response) => {
  try {
    await prisma.client.delete({
      where: {
            id: Number(request.params.id),
          
      },
    });
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ error: "NÃO ENCONTRADO" });
  }
});

app.listen(3333, () => console.log("Servidor Rodando..."));
