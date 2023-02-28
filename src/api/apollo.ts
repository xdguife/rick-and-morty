import { InMemoryCache } from '@apollo/client/cache';
import { createHttpLink, ApolloClient } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;