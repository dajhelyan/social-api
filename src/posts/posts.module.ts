import { Module } from '@nestjs/common';
// import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  providers: [PostsResolver],
})
export class PostsModule {}
