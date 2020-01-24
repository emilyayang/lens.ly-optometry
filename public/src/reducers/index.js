import ordersReducer from './ordersReducer.js';
import RXReducer from './RXReducer.js';
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  orders: ordersReducer,
  RX: RXReducer,
  router: connectRouter(history)
})

export default rootReducer