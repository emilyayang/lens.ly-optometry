import React from 'react';
import { Link } from 'react-router';
import createReactClass from 'create-react-class';
//presentational component
//clone element will pass props down to first child
const Main = createReactClass({
  // const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Robertson Optometry</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;