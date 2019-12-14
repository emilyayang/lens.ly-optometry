//exported into store
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import orders from './orders';
import RX from './RX';

//these are the 3 states including router to keep track of which page we are on
const rootReducer = combineReducers({orders, RX, routing: routerReducer});
export default rootReducer;