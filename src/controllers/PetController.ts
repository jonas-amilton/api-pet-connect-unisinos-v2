import { Request, Response } from "express";
import { PetService } from "../services/PetService";

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
}
