import React from 'react'
import PropTypes from 'prop-types'

const LensType = ({lensType, handleChooseLensType}) => (
  <div>
    <div>Choose Lens Type</div>
    <div className="lens-option" id="Single Vision" onClick={handleChooseLensType}>Single Vision
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Progressive" onClick={handleChooseLensType}>Progressive
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Bifocal" onClick={handleChooseLensType}>Bifocal
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>    
    <div className="lens-option" id="Non-prescription" onClick={handleChooseLensType}>Non-prescription
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensType.propTypes = {
  lensType: PropTypes.string,
  handleChooseLensType: PropTypes.func.isRequired
}

export default LensType