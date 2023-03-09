import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  findAll() {
    return `Hola soy el posteo?! Pero falta el service quien tendria que hacer esto`;
  }
}
