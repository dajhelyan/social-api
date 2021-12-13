import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostInput } from './inputs/post.inputs';
import { IdInput } from './inputs/post-id.input';
import { PostUpdateInput } from './inputs/post-update.input';
@Resolver()
export class PostsResolver {
  // constructor to call postService
  constructor(private readonly postService: PostsService) {}
  // Query to get all posts
  @Query(() => [CreatePostDto])
  async getPosts() {
    return this.postService.findAll();
  }

  // Query to get one post
  @Query(() => CreatePostDto)
  async findPost(@Args('input') id: IdInput) {
    return this.postService.findId(id);
  }

  // create a mutation to create new post
  @Mutation(() => CreatePostDto)
  async createPost(@Args('input') input: PostInput) {
    return this.postService.create(input);
  }

  // Mutation to update a post
  @Mutation(() => CreatePostDto)
  async updatePost(@Args('input') input: PostUpdateInput) {
    return this.postService.Update(input)
  }

  // Mutation to delete a post
  @Mutation(() => String)
  async deletePost(@Args('id') id: IdInput): Promise<any> {
    await this.postService.delete(id);
    // return this.postService.findAll();
    return 'The post was deleted';
  }
}
