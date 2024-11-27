import { Router } from "express";
import User from "../models/User";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rotas
router.post("/users", (req, res) => {
  userController.create(req, res);
});

router.get("/users", (req, res) => userController.getAll(req, res));

export default router;
