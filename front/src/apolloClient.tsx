// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { RestLink } from "apollo-link-rest";

// const restLink = new RestLink({ uri: "localhost:4000" });

// const client = new ApolloClient({
//   link: restLink,
//   cache: new InMemoryCache()
// });

// export default client;
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default client;