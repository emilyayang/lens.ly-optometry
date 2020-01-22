import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home.js'
import About from '../components/About.js'
import Order from '../components/Order.js'
import Lenses from '../components/Lenses.js'
import Login from '../components/Login.js'
import Account from '../components/Account.js'
import NoMatch from '../components/NoMatch.js'
import NavBar from '../components/NavBar.js'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/lenses" component={Lenses} />
      <Route path="/order-lenses" component={Order} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes