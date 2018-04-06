import {
  GraphQLInt,
  GraphQLNonNull,
  GapiController,
  Type,
  GapiModule,
  Bootstrap,
  ConfigService,
  GapiServerModule,
  Container,
  Mutation,
  Query
} from '@gapi/core';
import { UserType } from '../types/user.type';
import { UserService } from '../core/services/user/user.service';

@GapiController()
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


@GapiModule({
  imports: [
    GapiServerModule.forRoot({
      ...Container.get(ConfigService).APP_CONFIG,
      port: 10001
    })
  ],
  controllers: [UserQueriesController]
})
export class AppModule { }

Bootstrap(AppModule);
