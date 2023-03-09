import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,
  ) {}

  async create(createDogDto: CreateDogDto) {
    try {
      const product = this.dogRepository.create(createDogDto);
      await this.dogRepository.save(product);

      return product;
    } catch (error) {}
  }
  getAllDogs() {
    return this.dogRepository.find();
  }
  async findeOne(id: string) {
    const dog = await this.dogRepository.findOneBy({ id });
    if (!dog) throw new NotFoundException(`No hay tal perro`);
    return dog;
  }
  // async findeOneOwner(ownerId: string) {
  //   const dog = await this.dogRepository.findOneBy({ ownerId });
  //   if (!dog) throw new NotFoundException(`No hay tal perro`);
  //   return dog;
  // }
  async remove(id: string) {
    const dog = await this.findeOne(id);
    await this.dogRepository.delete(dog);
    return `El perro de id ${id} fue eliminado`;
  }
}
