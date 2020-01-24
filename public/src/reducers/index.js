import { orders, orderStep, RX } from './ordersReducer.js';
// import RX from './RXReducer.js';
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  orders,
  orderStep,
  RX,
  router: connectRouter(history)
})

export default rootReducer