import {
  GraphQLInt,
  GraphQLNonNull,
  GapiController,
  Type,
  Query,
  GapiModule,
  Bootstrap,
  ConfigService,
  GapiServerModule,
  Container
} from '@gapi/core';
import { UserType } from '../types/user.type';
import { UserService } from '../core/services/user/user.service';

@GapiController()
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

@GapiModule({
  imports: [
    GapiServerModule.forRoot({
      ...Container.get(ConfigService).APP_CONFIG,
      port: 10000
    })
  ],
  controllers: [UserQueriesController]
})
export class AppModule {}

Bootstrap(AppModule);
