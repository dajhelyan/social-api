import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostInput } from './inputs/post.inputs';
@Resolver()
export class PostsResolver {
  // constructor to call postService
  constructor(private readonly postService: PostsService) {}
  // First query for post
  @Query(() => String)
  async Posts() {
    return 'working';
  }

  // create a mutation to create new post
  @Mutation(() => CreatePostDto)
  async createPost(@Args('input') input: PostInput) {
    return this.postService.create(input);
  }
}
