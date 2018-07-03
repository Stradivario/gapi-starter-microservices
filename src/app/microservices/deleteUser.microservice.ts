import {
  GraphQLInt,
  GraphQLNonNull,
  Controller,
  Type,
  Module,
  Mutation,
  Query,
  BootstrapFramework
} from '@gapi/core';
import { UserType } from '../types/user.type';
import { UserService } from '../core/services/user/user.service';
import { CoreModule } from '../core/core.module';
import { FrameworkImports } from '../../framework-imports';

@Controller()
export class UserQueriesController {

  constructor(
    private userService: UserService
  ) { }

  @Type(UserType)
  @Query({
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  })
  initQuery(root, { id }, context): UserType {
    return this.userService.deleteUser(id);
  }

  @Type(UserType)
  @Mutation({
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  })
  deleteUser(root, { id }, context): UserType {
    return this.userService.deleteUser(id);
  }
}

@Module({
  imports: [CoreModule],
  controllers: [UserQueriesController]
})
export class AppModule { }

BootstrapFramework(AppModule, [FrameworkImports]).toPromise();