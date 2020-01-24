import Order from '../components/Order.js'
import { connect } from 'react-redux'
import { addOrder, removeOrder, changeOrderStep } from '../actions/order.js'

const mapStateToProps = state => ({
  orders: state.orders,
  orderStep: state.orderStep
})

const mapDispatchToProps = dispatch => ({
  addOrder: () => dispatch(addOrder()),
  removeOrder: () => dispatch(removeOrder()),
  handleOrderStepChange: (OrderStep) => {
    dispatch(changeOrderStep(OrderStep));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)