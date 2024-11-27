import { Router } from "express";
import { PetController } from "../controllers/PetController";

const router = Router();
const petController = new PetController();

router.get("/pets", (req, res) => petController.getAll(req, res));

export default router;
