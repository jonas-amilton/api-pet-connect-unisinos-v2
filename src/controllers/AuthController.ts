import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const userService = new UserService();

export class AuthController {
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
