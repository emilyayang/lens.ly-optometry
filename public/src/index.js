import React from 'react';
import { render } from 'react-dom';
import css from './styles/app.css';
import App from './components/App.js'
import Order from './components/Order.js'
// import Main from './components/Main.js'
import TopHeader from './components/TopHeader.js'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//need to bind redux with react with this
import { Provider } from 'react-redux';
//store is export default, history is named
import { store, history } from './Store.js';

//allows push state changes without reloading page
//nest index route since it is changing

//main and order routes need to be inside main route
//provider exposes our store to our app 
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={TopHeader}></IndexRoute>
        <Route path='/order#' component={Order}></Route>
        {/* <Route path='/orders/:orderId' component={Order}></Route> */}
      </Route>
    </Router>
  </Provider>
)

render(<App />, document.getElementById('root')) //changed to router!
// render(router, document.getElementById('root'))