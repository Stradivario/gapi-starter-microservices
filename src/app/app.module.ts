import { GapiModule } from '@gapi/core';
import { GapiMicroserviceModule } from '@gapi/microservices';

@GapiModule({
  imports: [
    GapiMicroserviceModule.forRoot([
      {name: 'microservice1', link: 'http://localhost:10000/graphql'},
      {name: 'microservice2', link: 'http://localhost:10001/graphql'}
    ]),
  ]
})
export class AppModule {}
