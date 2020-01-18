// import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
// import { createBrowserHistory } from 'history';

// //import root reducer
// import rootReducer from './reducers/index.js'

// //create an obj for the default data
// const defaultState = {
//   orders: [],
//   RX: []
// };

// // const enhancers = compose(
// //   window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// // );

// const store = createStore(rootReducer, defaultState);
// // export const history = syncHistoryWithStore(browserHistory, store);
// export const history = syncHistoryWithStore(createBrowserHistory(), store);

// // if (module.hot) {
// //   module.hot.accept('./reducers/', () => {
// //     const nextRootReducer = require('./reducers/index.js').default;
// //     store.replaceReducer(nextRootReducer);
// //   });
// // }

// export default store;

// // configureStore.js

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}