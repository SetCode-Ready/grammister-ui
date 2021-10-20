import { toast } from 'react-hot-toast';
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message }) =>
    toast.error(
        `${message}`,
      ),
    );

  if (networkError) toast.error(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(String(localStorage.getItem('token')));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


export const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache()
});
