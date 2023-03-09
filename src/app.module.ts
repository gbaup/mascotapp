import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [DatabaseModule, PostsModule, UsersModule, DogsModule, CatsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
