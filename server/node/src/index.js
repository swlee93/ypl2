

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs"
import { ApolloServer, gql } from 'apollo-server'
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then((props) => {
  const { url } = props
  console.log(`🚀  Server ready ${JSON.stringify(props, null, 4)}`);
});
