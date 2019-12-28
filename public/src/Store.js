import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';

//import root reducer
import rootReducer from './reducers/index.js'

//create an obj for the default data
const defaultState = {
  orders: [],
  RX: []
};

// const enhancers = compose(
//   window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// );

export const store = createStore(rootReducer, defaultState);
// export const history = syncHistoryWithStore(browserHistory, store);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index.js').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

// export default store;