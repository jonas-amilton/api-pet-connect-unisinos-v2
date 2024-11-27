import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const userService = new UserService();

export class UserController {
  // Método para retornar todos os usuários
  async getAll(req: Request, res: Response) {
    try {
      const allUsers = await userService.getAllUsers();

      res.json({
        status: 200,
        success: true,
        message: "Usuários listados com sucesso",
        data: allUsers,
      });
    } catch (error: any) {
      if (error.message === "Nenhum usuário cadastrado") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro interno no servidor" });
      }
    }
  }
}
