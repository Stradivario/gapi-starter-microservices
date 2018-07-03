import { Module } from '@gapi/core';
import { MicroserviceModule } from '@gapi/microservices';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    MicroserviceModule.forRoot([
      {name: 'microservice1', link: 'http://localhost:10000/graphql'},
      {name: 'microservice2', link: 'http://localhost:10001/graphql'}
    ]),
  ]
})
export class AppModule {}
