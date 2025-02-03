import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  HttpLink,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache", // Disable caching for watchQuery
    errorPolicy: "all", // Optional, you can handle errors as per your need
  },
  query: {
    fetchPolicy: "no-cache", // Disable caching for queries
    errorPolicy: "all", // Optional, handle query errors
  },
  mutate: {
    fetchPolicy: "no-cache", // Disable caching for mutations
    errorPolicy: "all", // Optional, handle mutation errors
  },
};

export const serverClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    headers: {
      Authorization: `Apikey ${process.env.GRAPHQL_TOKEN}`,
    },
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions,
});
