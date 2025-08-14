import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  user(@Args('id') id: string): User | undefined {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput): User {
    return this.userService.createUser(input);
  }
}
