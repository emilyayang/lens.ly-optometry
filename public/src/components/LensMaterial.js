import React from 'react'
import PropTypes from 'prop-types'
import { handleChooseLensMaterial } from '../actions/order.js'

const LensMaterial = ({lensMaterial}) => (
  <div>
    <div>Choose Lens Material</div>
    <div className="lens-option" id="CR39" onClick={handleChooseLensMaterial}>CR39
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Polycarbonate" onClick={handleChooseLensMaterial}>Polycarbonate
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Trivex" onClick={handleChooseLensMaterial}>Trivex
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>    
    <div className="lens-option" id="1.67 High Index" onClick={handleChooseLensMaterial}>1.67 High Index
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="1.74 High Index" onClick={handleChooseLensMaterial}>1.74 High Index
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensMaterial.propTypes = {
  lensMaterial: PropTypes.string,
}

export default LensMaterial