import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  providers: [],
  imports: [],
})
export class PostsModule {}
