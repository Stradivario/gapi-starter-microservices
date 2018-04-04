import { GapiObjectType, GraphQLScalarType, GraphQLString, GraphQLInt } from '@gapi/core';

@GapiObjectType()
export class UserType {
    readonly id: number | GraphQLScalarType = GraphQLInt;
    readonly email: string | GraphQLScalarType = GraphQLString;
}
