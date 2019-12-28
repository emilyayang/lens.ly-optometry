import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import TopHeader from './TopHeader.js';

function mapStateToProps(state) {
  return {
    orders: state.orders,
    RX: state.RX
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

//connect injects data into TopHeader without having to pass it down 5 times
const App = connect(mapStateToProps, mapDispatchToProps)(TopHeader);
//need to import TopHeader and called app then will call TopHeader
export default App;