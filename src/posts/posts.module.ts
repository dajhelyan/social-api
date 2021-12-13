import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.schema';
// import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  // forFeature() configure the module and define the models should be registered
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
