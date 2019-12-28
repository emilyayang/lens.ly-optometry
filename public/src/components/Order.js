import React from 'react';
import { Link } from 'react-router';
import createReactClass from 'create-react-class';

const Order = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/order#">ORDER#</Link>
        </h1>
      </div>
    )
  }
});

export default Order;