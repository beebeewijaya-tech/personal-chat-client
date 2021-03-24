import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";

import "./assets/style/index.css";

import MainNavigator from "./navigation";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BASE_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      authorization: localStorage.getItem("@token") || "",
    },
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("@token") || "";

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainNavigator />
    </ApolloProvider>
  );
}

export default App;
