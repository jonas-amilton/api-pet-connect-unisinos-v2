import { Request, Response } from "express";
import { PetService } from "../services/PetService";
import Pet from "../models/Pet";
import Image from "../models/Image";

const petService = new PetService();

export class PetController {
  // Método para retornar todos os pets
  async getAll(req: Request, res: Response) {
    try {
      const allPets = await petService.getAllPets();

      res.json({
        status: 200,
        success: true,
        message: "Pets listados com sucesso",
        data: allPets,
      });
    } catch (error: any) {
      if (error.message === "Nenhum pet cadastrado") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro interno no servidor" });
      }
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, age, size } = req.body;

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "A foto do pet é obrigatória",
        });
      }

      const pet = await petService.createPet({
        name,
        age,
        size,
        photo: req.file,
      });

      res.json({
        success: true,
        message: "Pet adicionado com sucesso",
        data: pet,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getImage(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (isNaN(Number(id))) {
        return res.status(400).json({
          success: false,
          message: "ID do pet inválido",
        });
      }

      const image = await petService.getPetImageById(Number(id));

      res.set("Content-Type", "image/jpeg");
      res.send(image.data);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
