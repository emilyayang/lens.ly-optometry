import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Order from '../components/Order.js'
import { connect } from 'react-redux'
import { addOrder, changeOrderStep } from '../actions/order.js'

class OrderContainer extends Component {
  constructor(props) {
    super(props)
    this.getRX = this.getRX.bind(this)
    this.postOrder = this.postOrder.bind(this)
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
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Order RX={RX} postOrder={this.postOrder}/>
      </div>
    )
  }
}

OrderContainer.propTypes = {
  RX: PropTypes.array,
  // selectedRX: PropTypes.string,
  add: PropTypes.string,
  orders: PropTypes.array,
  addOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
  // saveRX: PropTypes.func.isRequired,
}


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

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)