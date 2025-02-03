//client side apolloClient

import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  createHttpLink,
} from "@apollo/client";

export const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

const httpLink = createHttpLink({
  uri: `${BASE_URL}/api/graphql`,
});

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

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
