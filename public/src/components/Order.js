import React from 'react'
import PropTypes from 'prop-types'

const Order = (props) => {
  return (
    <div>
      Order: {props.count}
      <button onClick={props.addOrder}>+</button>
      <button onClick={props.removeOrder}>-</button>
    </div>
  )
}

Order.propTypes = {
  userId: PropTypes.string,
  OD: PropTypes.array,
  OS: PropTypes.array,
  PD: PropTypes.array,
  RXname: PropTypes.string,
  add: PropTypes.string,
  lensType: PropTypes.string,
  lensUsage: PropTypes.string,
  lensMaterial: PropTypes.string,
  lensOptions: PropTypes.array,
  lensUpgrades: PropTypes.array,
  orders: PropTypes.array,
  addOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
}

export default Order