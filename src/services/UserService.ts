import User from "../models/User";

export class UserService {
  // método para retornar todos os usuários
  async getAllUsers() {
    const allUsers = await User.findAll();

    if (allUsers.length === 0) {
      throw new Error("Nenhum usuário cadastrado");
    }

    return allUsers;
  }
}
