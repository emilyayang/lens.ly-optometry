import ordersReducer from './orders.js';
import RXReducer from './RX.js';
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  orders: ordersReducer,
  RX: RXReducer,
  router: connectRouter(history)
})

export default rootReducer