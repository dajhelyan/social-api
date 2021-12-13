import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class PostUpdateInput {
  @Field(() => ID)
  _id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  image: string;
}
