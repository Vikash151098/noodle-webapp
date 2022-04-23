import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


// import React, { useCallback, useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import InfiniteScroll from 'react-infinite-scroller';
// import parseLinkHeader from 'parse-link-header';

// async function fetchIssues(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: new Headers({
//       Accept: 'application/vnd.github.v3+json'
//     })
//   });

//   const links = parseLinkHeader(response.headers.get('Link'));
//   const issues = await response.json();

//   return {
//     links,
//     issues
//   };
// }

// const App = () => {
//   const [items, setItems] = useState([]);
//   const [nextPageUrl, setNextPageUrl] = useState(
//     'https://api.github.com/repos/facebook/react/issues'
//   );
//   const [fetching, setFetching] = useState(false);

//   const fetchItems = useCallback(
//     async () => {
//       if (fetching) {
//         return;
//       }

//       setFetching(true);

//       try {
//         const { issues, links } = await fetchIssues(nextPageUrl);

//         setItems([...items, ...issues]);

//         if (links.next) {
//           setNextPageUrl(links.next.url);
//         } else {
//           setNextPageUrl(null);
//         }
//       } finally {
//         setFetching(false);
//       }
//     },
//     [items, fetching, nextPageUrl]
//   );

//   const hasMoreItems = !!nextPageUrl;

//   const loader = (
//     <div key="loader" className="loader">
//       Loading ...
//     </div>
//   );

//   return (
//     <InfiniteScroll
//       loadMore={fetchItems}
//       hasMore={hasMoreItems}
//       loader={loader}
//     >
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             <a href={item.url} target="_blank" rel="noopener">
//               {item.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </InfiniteScroll>
//   );
// };

// ReactDOM.render(<App />,document.getElementById('root'));



// ReactDOM.render(<Clock />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
