import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { CreatePostDto } from './dto/create-post.dto';
import { PostInput } from './inputs/post.inputs';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostsService {
  // Call @injectModel to inject the schema
  constructor(@InjectModel('Post') private postModel: Model<PostDocument>) {}

  async create(createPostDto: PostInput): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
