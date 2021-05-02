import { ApolloClient, ApolloLink } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = createUploadLink({ uri: "https://localhost:8000/graphql" });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem("token");
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  //link: ApolloLink.from([errorLink, link]),
  link: authLink.concat(link, errorLink),
});
