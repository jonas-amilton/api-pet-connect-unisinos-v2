import Pet from "../models/Pet";

export class PetService {
  async getAllPets() {
    const allPets = await Pet.findAll();

    if (allPets.length === 0) {
      throw new Error("Nenhum pet cadastrado");
    }

    return allPets;
  }
}
