import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  create(createcCatDto: CreateCatDto) {
    return `Cat created`;
  }
}
