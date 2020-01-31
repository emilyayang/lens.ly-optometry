// import React from "react";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { signout } from "../actions/auth";
// import requireAuth from "./hoc/requireAuth";

// const Main = ({ signout }) => {
//   return (
//     <div className="page">
//       <div>
//         <span className="emoji" role="img" aria-label="House With Garden">
//           🏡
//         </span>
//       </div>
//       <h1>Welcome on Home</h1>
//       <p>You have successfully signed in, congrats!</p>
//       <button className="btn-switch" onClick={() => signout()}>
//         Log out
//       </button>
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   return {
//     auth: state.firebaseReducer.auth
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     signout: () => dispatch(signout())
//   };
// }

// export default compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   ),
//   requireAuth
// )(Main);


import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div>
      New prescription lenses for your own frames
    </div>
    <div>
      Save time and maximize convenience by
    </div>

    <Link to="/order-lenses" className="nav-option">Choose Your New Lenses</Link>

  </div>
)

export default Home