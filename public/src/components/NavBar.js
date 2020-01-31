import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from "redux";
import { connect } from "react-redux";
import { signout } from "../actions/auth";
// import requireAuth from "./hoc/requireAuth";

const NavBar = ({ signout, auth }) => (
  <div>
    <div>
      <div id="page-title">
        <Link to="/">lens.ly</Link>
      </div>
      <Link to="/about" className="nav-option">About Us</Link>
      <Link to="/lenses" className="nav-option">Our Lenses</Link>
      <Link to="/order-lenses" className="nav-option">Order Replacement Lenses</Link>
      <div id="login-button">
        {!auth.isLoaded ? <div></div> : !auth.isEmpty ?
          <div>
            <Link to="/account">Account</Link>
            <button className="btn-switch" onClick={() => signout()}> Log out </button>
          </div>
          : <Link to="/login">Login</Link>}
      </div>
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signout())
  };
}

// export default connect(mapStateToProps)(NavBar);
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);