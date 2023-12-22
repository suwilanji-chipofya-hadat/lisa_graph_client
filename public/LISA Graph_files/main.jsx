import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2bd793ed"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=2bd793ed"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=2bd793ed"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/index.css";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from
} from "/node_modules/.vite/deps/@apollo_client.js?v=2bd793ed";
import { onError } from "/node_modules/.vite/deps/@apollo_client_link_error.js?v=2bd793ed";
import { RecoilRoot } from "/node_modules/.vite/deps/recoil.js?v=2bd793ed";
import {
  createBrowserRouter,
  RouterProvider
} from "/node_modules/.vite/deps/react-router-dom.js?v=2bd793ed";
import Root from "/src/routes/root.jsx";
import Market from "/src/routes/market.jsx";
import Stock from "/src/routes/stock.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Root, {}, void 0, false, {
        fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
        lineNumber: 23,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "",
          element: /* @__PURE__ */ jsxDEV(Market, {}, void 0, false, {
            fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
            lineNumber: 27,
            columnNumber: 14
          }, this)
        },
        {
          path: "/details",
          element: /* @__PURE__ */ jsxDEV(Stock, {}, void 0, false, {
            fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
            lineNumber: 31,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(
      ({ message, locations, path }) => console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError)
    console.log(`[Network error]: ${networkError}`);
});
const httpLink = createHttpLink({
  uri: "https://lisagraph.vercel.app/graphql/"
});
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(ApolloProvider, { client, children: /* @__PURE__ */ jsxDEV(RecoilRoot, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
    lineNumber: 65,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
    lineNumber: 63,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/suwilanji/hq/graph/client/src/main.jsx",
    lineNumber: 62,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0JhO0FBdEJiLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPO0FBQ1A7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsU0FBU0MsZUFBZTtBQUN4QixTQUFTQyxrQkFBa0I7QUFDM0I7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLFdBQVc7QUFDbEIsTUFBTUMsU0FBU0w7QUFBQUEsRUFBb0I7QUFBQSxJQUNqQztBQUFBLE1BQ0VNLE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFLO0FBQUEsTUFDZEMsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFRixNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQU87QUFBQSxRQUNsQjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQU07QUFBQSxRQUNqQjtBQUFBLE1BQUM7QUFBQSxJQUVMO0FBQUEsRUFBQztBQUNGO0FBRUQsTUFBTUUsWUFBWVgsUUFBUSxDQUFDLEVBQUVZLGVBQWVDLGFBQWEsTUFBTTtBQUU3RCxNQUFJRDtBQUVGQSxrQkFBY0U7QUFBQUEsTUFBUSxDQUFDLEVBQUVDLFNBQVNDLFdBQVdSLEtBQUssTUFFaERTLFFBQVFDO0FBQUFBLFFBRUwsNkJBQTRCSCxPQUFRLGVBQWNDLFNBQVUsV0FBVVIsSUFBSztBQUFBLE1BRTlFO0FBQUEsSUFFRjtBQUVGLE1BQUlLO0FBQWNJLFlBQVFDLElBQUssb0JBQW1CTCxZQUFhLEVBQUM7QUFFbEUsQ0FBQztBQUNELE1BQU1NLFdBQVd0QixlQUFlO0FBQUEsRUFDOUJ1QixLQUFLO0FBQ1AsQ0FBQztBQUNELE1BQU1DLFNBQVMsSUFBSXpCLGFBQWE7QUFBQSxFQUM5QjBCLE1BQU12QixLQUFLLENBQUNZLFdBQVdRLFFBQVEsQ0FBQztBQUFBLEVBQ2hDSSxPQUFPLElBQUl6QixjQUFjO0FBQzNCLENBQUM7QUFDREosU0FBUzhCLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDO0FBQUFBLEVBQ25ELHVCQUFDLE1BQU0sWUFBTixFQUNDLGlDQUFDLGtCQUFlLFFBQ2QsaUNBQUMsY0FDQyxpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNQTtBQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwb2xsb1Byb3ZpZGVyIiwiQXBvbGxvQ2xpZW50IiwiY3JlYXRlSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiZnJvbSIsIm9uRXJyb3IiLCJSZWNvaWxSb290IiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiUm9vdCIsIk1hcmtldCIsIlN0b2NrIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImVycm9yTGluayIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJmb3JFYWNoIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJodHRwTGluayIsInVyaSIsImNsaWVudCIsImxpbmsiLCJjYWNoZSIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHtcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIEFwb2xsb0NsaWVudCxcbiAgY3JlYXRlSHR0cExpbmssXG4gIEluTWVtb3J5Q2FjaGUsXG4gIGZyb21cbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yXCI7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7XG4gIGNyZWF0ZUJyb3dzZXJSb3V0ZXIsXG4gIFJvdXRlclByb3ZpZGVyLFxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9yb3V0ZXMvcm9vdC5qc3gnO1xuaW1wb3J0IE1hcmtldCBmcm9tICcuL3JvdXRlcy9tYXJrZXQnO1xuaW1wb3J0IFN0b2NrIGZyb20gJy4vcm91dGVzL3N0b2NrJztcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPFJvb3QvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICBlbGVtZW50OiA8TWFya2V0Lz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9kZXRhaWxzXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxTdG9jay8+XG4gICAgICB9XG4gICAgXVxuICB9LFxuXSk7XG5cbmNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcblxuICBpZiAoZ3JhcGhRTEVycm9ycylcblxuICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cblxuICAgICAgY29uc29sZS5sb2coXG5cbiAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWBcblxuICAgICAgKVxuXG4gICAgKTtcblxuICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLmxvZyhgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcblxufSk7XG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgdXJpOiAnaHR0cHM6Ly9saXNhZ3JhcGgudmVyY2VsLmFwcC9ncmFwaHFsLydcbn0pO1xuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbms6IGZyb20oW2Vycm9yTGluaywgaHR0cExpbmtdKSxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbn0pO1xuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfS8+XG4gICAgICA8L1JlY29pbFJvb3Q+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbilcbiAiXSwiZmlsZSI6Ii9ob21lL3N1d2lsYW5qaS9ocS9ncmFwaC9jbGllbnQvc3JjL21haW4uanN4In0=