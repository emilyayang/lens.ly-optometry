import Order from '../components/Order.js'
import { connect } from 'react-redux'
import { addOrder, removeOrder } from '../actions/actionCreators.js'

const mapStateToProps = state => ({
  orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  addOrder: () => dispatch(addOrder()),
  removeOrder: () => dispatch(removeOrder()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)