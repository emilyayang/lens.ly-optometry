// import React from 'react';
// import { render } from 'react-dom';
// // import css from './styles/app.css';
// import App from './components/App.js'
// import Order from './components/Order.js'
// // import Main from './components/Main.js'
// import TopHeader from './components/TopHeader.js'
// import { Router, Route, IndexRoute } from 'react-router-dom'

// // import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
// //store is export default, history is named
// import store, { history } from './Store.js';

// //allows push state changes without reloading page
// //nest index route since it is changing

// //main and order routes need to be inside main route
// //provider exposes our store to our app 
// // const router = (
// //   <Provider store={store}>
// //     <Router history={history}>
// //       <Route path='/' component={App}>
// //         <IndexRoute component={TopHeader}></IndexRoute>
// //         <Route path='/order#' component={Order}></Route>
// //         {/* <Route path='/orders/:orderId' component={Order}></Route> */}
// //       </Route>
// //     </Router>
// //   </Provider>
// // )

// render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route exact path="/" component={App} />
//       <IndexRoute component={TopHeader}></IndexRoute>
//       <Route path="/order#" component={Order} />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )

// // render(<App />, document.getElementById('root')) //changed to router!
// // render(router, document.getElementById('root'))
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

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}