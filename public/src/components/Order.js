import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addOrder, removeOrder } from '../actions/actionCreators.js'

const Order = (props) => (
  <div>
    Order: {props.count}
    <button onClick={props.addOrder}>+</button>
    <button onClick={props.removeOrder}>-</button>
  </div>
)

Order.propTypes = {
  userId: PropTypes.string,
  OD: PropTypes.string,
  OS: PropTypes.string,
  PD: PropTypes.number,
  RXname: PropTypes.string,
  add: PropTypes.string,
  orders: PropTypes.string,
  addOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  addOrder: () => dispatch(addOrder()),
  removeOrder: () => dispatch(removeOrder()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)