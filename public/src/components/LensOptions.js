import React from 'react'
import PropTypes from 'prop-types'
import { handleChooseLensOptions } from '../actions/order.js'

const LensOptions = ({lensOptions}) => (
  <div>
    <div>Lens Options</div>
    <div className="lens-option" id="No Color" onClick={handleChooseLensOptions}>No Color
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Blue Light Filtering" onClick={handleChooseLensOptions}>Blue Light Filtering
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Tinted" onClick={handleChooseLensOptions}>Tinted
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Transitions" onClick={handleChooseLensOptions}>Transitions
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensOptions.propTypes = {
  lensOptions: PropTypes.array,
}

export default LensOptions