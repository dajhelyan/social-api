import { Field,  Int, ObjectType } from '@nestjs/graphql';
// Defining the obj structuro of what i expect to save in the db
@ObjectType()
export class CreatePostDto {
  // @Field(() => ID)
  // id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  image: string;
  @Field(() => Int)
  voted: number;
}
