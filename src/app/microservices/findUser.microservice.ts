import {
  GraphQLInt,
  GraphQLNonNull,
  Controller,
  Type,
  Query,
  Module,
  BootstrapFramework,
} from '@gapi/core';
import { UserType } from '../types/user.type';
import { UserService } from '../core/services/user/user.service';
import { CoreModule } from '../core/core.module';
import { FrameworkImports } from '../../framework-imports';

@Controller()
export class UserQueriesController {

  constructor(
    private userService: UserService
  ) {}

  @Type(UserType)
  @Query({
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  })
  findUser(root, { id }, context): UserType {
    return this.userService.findUser(id);
  }
}

@Module({
  imports: [
    CoreModule,
  ],
  controllers: [UserQueriesController]
})
export class AppModule {}

BootstrapFramework(AppModule, [FrameworkImports]).toPromise();
