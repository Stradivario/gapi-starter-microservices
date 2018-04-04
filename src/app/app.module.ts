import { Container, GapiModule, ConfigService, GapiServerModule } from '@gapi/core';
import { ProxyService } from './core/services/proxy/proxy.service';

@GapiModule({
  imports: [
    GapiServerModule.forRoot({
      ...Container.get(ConfigService).APP_CONFIG,
      schema: Container.get(ProxyService).getSchemaIntrospection()
    })
  ]
})
export class AppModule {}
