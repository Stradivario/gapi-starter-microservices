
import { GapiModule } from '@gapi/core';
import { AuthPrivateService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

@GapiModule({
    services: [
        UserService,
        AuthPrivateService
    ]
})
export class CoreModule {}