// tslint:disable
// graphql typescript definitions


  export interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  export interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  export interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  
  export interface IQuery {
    __typename?: "Query";
    findUser: IUserType | null;
    deleteUser: IUserType | null;
}

  
  export interface IUserType {
    __typename?: "UserType";
    id: number | null;
    email: string | null;
}


// tslint:enable
