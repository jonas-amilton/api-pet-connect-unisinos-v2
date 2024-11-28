import Pet from "../models/Pet";

export class PetService {
  async getAllPets() {
    const allPets = await Pet.findAll();

    if (allPets.length === 0) {
      throw new Error("Nenhum pet cadastrado");
    }

    return allPets;
  }

  async createPet({
    name,
    age,
    size,
    photo,
  }: {
    name: string;
    age: string;
    size: string;
    photo: any;
  }) {
    if (!photo) {
      throw new Error("Foto é obrigatória");
    }

    const pathFile = `/images/${photo.filename}`;

    const newPet = await Pet.create({
      name,
      age,
      size,
      photo: pathFile,
    });

    return newPet;
  }
}
