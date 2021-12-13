import { InputType, Field, ID } from '@nestjs/graphql';

// Input to find for ID
@InputType()
export class IdInput {
  @Field(() => ID)
  _id: string;
}
