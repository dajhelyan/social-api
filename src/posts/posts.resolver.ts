import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PostsResolver {
  // constructor to call postService

  // First query for post
  @Query(() => String)
  async Posts() {
    return 'working';
  }

  // create a mutation to create new post
  @Mutation()
}
