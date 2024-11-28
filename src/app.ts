import express from "express";
import path from "path";
import cors from "cors";
import sequelize from "./database/database";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import petRoutes from "./routes/petRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/pet-connect/auth", authRoutes);
app.use("/api/pet-connect", userRoutes);
app.use("/api/pet-connect", petRoutes);
app.use(
  "/api/pet-connect/images",
  express.static(path.join(__dirname, "../uploads/images"))
);

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
  console.log("Servindo imagens de:", path.join(__dirname, "/uploads/images"));
});
