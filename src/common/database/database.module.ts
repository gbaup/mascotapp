import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entities/cat.entity';
import { Dog } from 'src/dogs/entities/dog.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Root.1234',
        database: 'mascotapp',
        entities: [Cat, Dog, User, Post],
        synchronize: true,
        keepConnectionAlive: true,
        retryAttempts: 2,
        retryDelay: 1000,
      }),
    }),
  ],
})
export class DatabaseModule {}
