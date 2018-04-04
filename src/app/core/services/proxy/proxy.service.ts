import { Service } from '@gapi/core';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import { mergeSchemas } from 'graphql-tools';
import { createHttpLink } from 'apollo-link-http';
const fetch = require('node-fetch');

@Service()
export class ProxyService {

  private endpoints = [
    'http://localhost:10000/graphql',
    'http://localhost:10001/graphql'
  ];

  async getSchemaIntrospection() {
    console.log(await this.mergeSchemas(await Promise.all(this.endpoints.map(ep => this.getIntrospectSchema(ep)))));
    return await this.mergeSchemas(await Promise.all(this.endpoints.map(ep => this.getIntrospectSchema(ep))));
  }

  private mergeSchemas(allSchemas) {
    return mergeSchemas({ schemas: allSchemas });
  }

  private async getIntrospectSchema(uri) {
    const makeDatabaseServiceLink = () => createHttpLink({uri, fetch});
    return makeRemoteExecutableSchema({ schema: await introspectSchema(makeDatabaseServiceLink()), link: makeDatabaseServiceLink()});
  }

}