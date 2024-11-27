import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

// Rotas
router.post("/users", (req, res) => {
  userController.create(req, res);
});

router.get("/users", (req, res) => userController.getAll(req, res));

export default router;
