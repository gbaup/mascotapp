import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) - Si quiero usarla en algo puntual y no global
  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.getAllDogs();
  }
  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.dogsService.findeOne(id);
  }
  // @Get('owner/:ownerId')
  // getOneOwner(@Param('ownerId', ParseUUIDPipe) ownerId: string) {
  //   return this.dogsService.findeOne(ownerId);
  // }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.dogsService.remove(id);
  }
}
