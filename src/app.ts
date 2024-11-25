import express from "express";
import cors from "cors";
import sequelize from "./database/database";
import userRoutes from "./routes/userRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/pet-connect", userRoutes);

// Conecta ao banco de dados
sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

app.listen(3000, () => {
  console.log(
    `Servidor rodando localmente em ${"http://localhost:3000/api/pet-connect"}`
  );
});
