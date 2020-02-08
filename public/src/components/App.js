import React from "react";
import PropTypes from 'prop-types'
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Home from './Home'
import About from './About'
import OrderContainer from '../containers/OrderContainer'
import Lenses from './Lenses'
import Login from './Login'
import Account from './Account'
// import NoMatch from './NoMatch'
import NavBar from './NavBar'

const App = ({ history }) => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/lenses" component={Lenses} />
          <Route path="/order-lenses" component={OrderContainer} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object,
}

export default App;
