import Image from "../models/Image";
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
    photo: Express.Multer.File;
  }) {
    if (!photo) {
      throw new Error("Foto é obrigatória");
    }

    const newPet = await Pet.create({
      name,
      age,
      size,
    });

    const newImage = await Image.create({
      petId: newPet.id,
      name: photo.originalname,
      extension: photo.mimetype,
      size: photo.size,
      data: photo.buffer,
    });

    return {
      pet: newPet,
      image: newImage,
    };
  }

  async getPetImageById(petId: number) {
    const pet = await Pet.findOne({ where: { id: petId } });

    if (!pet) {
      throw new Error(`Pet com ID ${petId} não encontrado.`);
    }

    const image = await Image.findOne({ where: { petId } });

    if (!image) {
      throw new Error(`Nenhuma imagem encontrada para o pet ${petId}`);
    }

    return image;
  }
}
