import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from
} from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { RecoilRoot } from 'recoil';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import Market from './routes/market';
import Stock from './routes/stock';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Market/>,
      },
      {
        path: "/details",
        element: <Stock/>
      }
    ]
  },
]);

const errorLink = onError(({ graphQLErrors, networkError }) => {

  if (graphQLErrors)

    graphQLErrors.forEach(({ message, locations, path }) =>

      console.log(

        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`

      )

    );

  if (networkError) console.log(`[Network error]: ${networkError}`);

});
const httpLink = createHttpLink({
  uri: 'https://lisagraph.vercel.app/graphql/'
});
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <RouterProvider router={router}/>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
)
 