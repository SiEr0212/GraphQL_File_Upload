import React from "react";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ApolloError } from "@apollo/client/core";

impot UploadForm from  './UploadForm';

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost4000",
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm></UploadForm>
    </ApolloProvider>
  );
}

export default App;
