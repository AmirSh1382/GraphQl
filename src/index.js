import React from 'react';
import ReactDOM from 'react-dom/client';

// Componentns
import App from './App';

// Styles
import "./index.css"

// GraphQl
import { ApolloProvider, ApolloClient , InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);