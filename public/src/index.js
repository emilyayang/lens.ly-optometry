// // import css from './styles/app.css';

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import configureStore, { history } from './Store.js';

const store = configureStore()
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
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