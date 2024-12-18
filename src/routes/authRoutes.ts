import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();
const authController = new AuthController();

router.post("/login", (req, res) => {
  authController.login(req, res);
});

router.post("/register", (req, res) => {
  authController.create(req, res);
});

export default router;
