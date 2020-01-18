import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home.js'
import About from '../components/About.js'
import Order from '../components/Order.js'
// import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar.js'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/order" component={Order} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
)

export default routes