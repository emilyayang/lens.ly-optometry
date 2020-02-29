import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LensType from '../components/LensType.js';
import LensMaterial from '../components/LensMaterial.js';
import LensOptions from '../components/LensOptions.js';
import LensUpgrades from '../components/LensUpgrades.js';
import Prescription from '../components/Prescription.js';

import { connect } from 'react-redux'
import { postOrder, changeOrderStep } from '../actions/order.js'

class Order extends Component {
  constructor(props) {
    super(props)
    this.getRX = this.getRX.bind(this)
  }
  componentDidMount() {
    this.getRX();
  }

  getRX() {

  }

  postOrder() {

  }

  // handleChange(nextSubreddit) {
  //   this.props.dispatch(selectSubreddit(nextSubreddit))
  //   this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  // }
  render() {
    const { orderStep } = this.props;
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
          if (orderStep >= 1 && orderStep <= 4) {
            let step = orderStep + 1
            changeOrderStep(step)
          }
        }}>{">"}</button>
        <button onClick={() => {
          if (orderStep >= 2 && orderStep <= 5) {
            let step = orderStep - 1
            changeOrderStep(step)
          }
        }}>{"<"}</button>
      </div>
    )
  }
}

Order.propTypes = {
  orderStep: PropTypes.number,
  userId: PropTypes.string,
  RX: PropTypes.object,
  orders: PropTypes.array,
  // postOrder: PropTypes.func.isRequired,
  // removeOrder: PropTypes.func.isRequired,
  // changeOrderStep: PropTypes.func.isRequired
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
  orders: state.orders,
  orderStep: state.orderStep
})

const mapDispatchToProps = dispatch => ({
  addOrder: () => dispatch(addOrder()),
  removeOrder: () => dispatch(removeOrder()),
  changeOrderStep: (OrderStep) => {
    dispatch(changeOrderStep(OrderStep));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)