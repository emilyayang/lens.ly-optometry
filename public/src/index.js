import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import { AppContainer } from 'react-hot-loader'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from "../../firebaseConfig";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

import App from './components/App'
import authReducer from "./reducers/auth";
import apiStatusReducer from "./reducers/apiStatus";
import { orders, orderStep, RX } from './reducers/ordersReducer.js';

const history = createBrowserHistory()

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig)

firebase.firestore()

const rootReducer = (history) => combineReducers({
  firebaseReducer,
  firestoreReducer,
  authReducer,
  apiStatusReducer,
  orders,
  orderStep,
  RX,
  router: connectRouter(history)
})

function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history), reduxThunk
      ),
    ),
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store
}

const store = configureStore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App history={history} />
        </ReactReduxFirebaseProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}

export default firebase;