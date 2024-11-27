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

  // Método para criar usuário
  async create(req: Request, res: Response) {
    try {
      const { email, username, password } = req.body;

      if (!email || !username || !password) {
        return res
          .status(400)
          .json({ message: "Campos obrigatórios estão faltando ou inválidos" });
      }

      const newUser = await userService.createUser({
        email,
        username,
        password,
      });

      res.status(201).json({
        status: 201,
        success: true,
        message: "Usuário cadastrado com sucesso!",
        data: newUser,
      });
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error);

      if (error.message === "Usuário já está cadastrado!") {
        return res.status(409).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno no servidor" });
      }
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Campos obrigatórios estão faltando ou inválidos" });
      }

      const loggedUser = await userService.loginUser({ email, password });

      if (loggedUser) {
        res.status(200).json({
          status: 200,
          success: true,
          message: "Login bem-sucedido",
          data: loggedUser,
        });
      }
    } catch (error: any) {
      if (error.message === "Credenciais inválidas") {
        return res.status(401).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno no servidor" });
      }
    }
  }
}
