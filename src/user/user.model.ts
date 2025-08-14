import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType() // GraphQL object type
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}