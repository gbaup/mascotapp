import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dog.entity';

@Module({
  controllers: [DogsController],
  providers: [DogsService], //service
  imports: [TypeOrmModule.forFeature([Dog])],
})
export class DogsModule {}
