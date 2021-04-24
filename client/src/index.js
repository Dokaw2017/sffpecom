import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo";

/* client
  .query({
    query: gql`
      query GET_ALL_POSTS {
        getAllPosts {
          title
        }
      }
    `,
  })
  .then((result) => console.log(result));
 */

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
