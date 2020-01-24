import React from 'react'
import PropTypes from 'prop-types'
import LensType from './LensType.js';
import LensUsage from './LensUsage.js';
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
      {orderStep === 2 ? <LensUsage /> : null}
      {orderStep === 3 ? <LensMaterial /> : null}
      {orderStep === 4 ? <LensOptions /> : null}
      {orderStep === 5 ? <LensUpgrades /> : null}
      {orderStep === 6 ? <Prescription /> : null}
      <button onClick={() => {
        if (orderStep >= 1 && orderStep <= 5) {
          let step = orderStep + 1
          handleOrderStepChange(step)
        }
      }}>{">"}</button>
      <button onClick={() => {
        if (orderStep >= 2 && orderStep <= 6) {
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
  lensType: PropTypes.string,
  lensUsage: PropTypes.string,
  lensMaterial: PropTypes.string,
  lensOptions: PropTypes.array,
  lensUpgrades: PropTypes.array,
  orders: PropTypes.array,
  addOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
  changeOrderStep: PropTypes.func.isRequired,
}

export default Order