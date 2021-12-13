import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class PostInput {
  // @Field(() => ID)
  // id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  image: string;
  @Field({ defaultValue: 0 })
  voted: number;
}
