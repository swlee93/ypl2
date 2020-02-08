import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";

import Menu from "./routes/Menu";
import { Resources } from "./routes/MenuList";
const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => {
  const { customMenus, adminMenus } = Resources();
  return (
    <ApolloProvider client={client}>
      <Router>
        <ApolloHooksProvider client={client}>
          <Admin
            customRoutes={customMenus}
            menu={Menu}
            authProvider={authProvider}
            dataProvider={dataProvider}
          >
            {adminMenus}
          </Admin>
        </ApolloHooksProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
