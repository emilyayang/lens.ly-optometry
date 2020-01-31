import React from 'react'
import PropTypes from 'prop-types'
import LensType from './LensType.js';
import LensMaterial from './LensMaterial.js';
import LensOptions from './LensOptions.js';
import LensUpgrades from './LensUpgrades.js';
import Prescription from './Prescription.js';

const Order = ({ orderStep, handleOrderStepChange, addOrder, removeOrder }) => {
  return (
    <div>
      Order
        {/* <button onClick={addOrder}>+</button>
        <button onClick={removeOrder}>-</button> */}
      {orderStep === 1 ? <LensType /> : null}
      {orderStep === 2 ? <LensMaterial /> : null}
      {orderStep === 3 ? <LensOptions /> : null}
      {orderStep === 4 ? <LensUpgrades /> : null}
      {orderStep === 5 ? <Prescription /> : null}
      <button onClick={() => {
        if (orderStep >= 1 && orderStep <= 4) {
          let step = orderStep + 1
          handleOrderStepChange(step)
        }
      }}>{">"}</button>
      <button onClick={() => {
        if (orderStep >= 2 && orderStep <= 5) {
          let step = orderStep - 1
          handleOrderStepChange(step)
        }
      }}>{"<"}</button>
    </div>
  )
}

Order.propTypes = {
  orderStep: PropTypes.number,
  userId: PropTypes.string,
  OD: PropTypes.array,
  OS: PropTypes.array,
  PD: PropTypes.array,
  RXname: PropTypes.string,
  add: PropTypes.string,
  orders: PropTypes.array,
  addOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
  changeOrderStep: PropTypes.func.isRequired,
}

export default Order;