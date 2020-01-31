import React from 'react'
import PropTypes from 'prop-types'

const LensType = ({lensType}) => (
  <div>
    <div>Choose Lens Type</div>
    <div className="lens-option" value={lensType}>Single Vision
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensType}>Progressive
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensType}>Bifocal
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>    
    <div className="lens-option" value={lensType}>Non-prescription
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensType.propTypes = {
  lensType: PropTypes.string,
}

export default LensType