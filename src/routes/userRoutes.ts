import { Router } from "express";
import User from "../models/User";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota para buscar todos os usuários
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, data: users });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar usuários" });
  }
});

// Rota para criar um novo usuário
router.post("/users/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const newUser = await User.create({ email, username, password });
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "Erro ao criar usuário" });
  }
});

export default router;
