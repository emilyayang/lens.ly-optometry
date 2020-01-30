import React from 'react'
import PropTypes from 'prop-types'

const LensMaterial = ({lensMaterial}) => (
  <div>
    <div>Choose Lens Material</div>
    <div className="lens-option" value={lensMaterial}>CR39
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensMaterial}>Polycarbonate
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensMaterial}>Trivex
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>    
    <div className="lens-option" value={lensMaterial}>1.67 High Index
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensMaterial}>1.74 High Index
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensMaterial.propTypes = {
  lensMaterial: PropTypes.string,
}

export default LensMaterial