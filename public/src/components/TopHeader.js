import React from 'react';
import { Link } from 'react-router';
import createReactClass from 'create-react-class';
//presentational component
//clone element will pass props down to first child
const TopHeader = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">lens.ly</Link>
        </h1>
        <p>
          <Link to="/lenses">Our Lenses</Link>
        </p>
        <p>
          <Link to="/order-lenses">Order Replacement Lenses</Link>
        </p>
        <p>
          <Link to="/about">About Us</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default TopHeader;