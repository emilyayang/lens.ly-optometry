import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LensType from '../components/LensType.js';
import LensMaterial from '../components/LensMaterial.js';
import LensOptions from '../components/LensOptions.js';
import LensUpgrades from '../components/LensUpgrades.js';
import Prescription from './Prescription.js';

import { useFirebase } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { incrementOrderStep, decrementOrderStep } from '../actions/order.js'

class Order extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.getRX();
  }

  getRX() {

  }

  render() {
    let { orderStep, incrementOrderStep, decrementOrderStep } = this.props;
    return (
      <div>
        Order
        {/* <button onClick={postOrder}>+</button>
        <button onClick={removeOrder}>-</button> */}
        {orderStep === 1 ? <LensType /> : null}
        {orderStep === 2 ? <LensMaterial /> : null}
        {orderStep === 3 ? <LensOptions /> : null}
        {orderStep === 4 ? <LensUpgrades /> : null}
        {orderStep === 5 ? <Prescription /> : null}
        <button onClick={() => {
          if (orderStep >= 2 && orderStep <= 5) {
            decrementOrderStep()
          }
        }}>{"<"}</button>
        <button onClick={() => {
          if (orderStep >= 1 && orderStep <= 4) {
            incrementOrderStep()
          }
        }}>{">"}</button>
      </div>
    )
  }
}

Order.propTypes = {
  orders: PropTypes.array,
  orderStep: PropTypes.number,
  incrementOrderStep: PropTypes.func.isRequired,
  decrementOrderStep: PropTypes.func.isRequired
}

// Order.propTypes = {
//   RX: PropTypes.array,
//   // selectedRX: PropTypes.string,
//   add: PropTypes.string,
//   orders: PropTypes.array,
//   addOrder: PropTypes.func.isRequired,
//   removeOrder: PropTypes.func.isRequired,
//   // saveRX: PropTypes.func.isRequired,
// }


const mapStateToProps = state => ({
  // orders: state.orders,
  orderStep: state.orderStep,
  // RX: state.RX,
})

const mapDispatchToProps = dispatch => ({
  incrementOrderStep: () => dispatch(incrementOrderStep()),
  decrementOrderStep: () => dispatch(decrementOrderStep()),
})

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firebaseConnect()
// )(Order);
export default connect(mapStateToProps, mapDispatchToProps)(Order)