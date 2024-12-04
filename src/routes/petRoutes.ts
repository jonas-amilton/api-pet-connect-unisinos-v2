import { Router } from "express";
import upload from "../config/multerConfig";
import { PetController } from "../controllers/PetController";

const router = Router();
const petController = new PetController();

router.get("/pets", (req, res) => petController.getAll(req, res));
router.post("/pets", upload.single("photo"), (req, res) => {
  petController.create(req, res);
});

router.get("/pets/:id/images", (req, res) => {
  petController.getImage(req, res);
});

export default router;
