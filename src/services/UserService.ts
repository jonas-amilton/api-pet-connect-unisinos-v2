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

  // método para criar usuário
  async createUser({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      throw new Error("Usuário já está cadastrado!");
    }

    const newUser = await User.create({
      email,
      username,
      password,
      isAdmin: false,
    });

    return newUser;
  }
}
