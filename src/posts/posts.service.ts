import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IdInput } from './inputs/post-id.input';
import { PostUpdateInput } from './inputs/post-update.input';
import { PostInput } from './inputs/post.inputs';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostsService {
  // Call @injectModel to inject the schema
  constructor(@InjectModel('Post') private postModel: Model<PostDocument>) {}

  // Find Id on the db
  async findId(post: IdInput): Promise<Post> {
    return this.postModel.findById(post._id);
  }

  // return all data
  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async create(createPostDto: PostInput): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  // Update a post
  async Update(postUpdate: PostUpdateInput): Promise<Post> {
    // get id of post to update
    const post = await this.postModel.findById(postUpdate._id);
    // update props
    post.title = postUpdate.title;
    post.description = postUpdate.description;
    post.image = postUpdate.image;
    return post.save();
  }

  // Delete a Post
  async delete(id: IdInput): Promise<Post> {
    return await this.postModel.remove(id);
  }
}
