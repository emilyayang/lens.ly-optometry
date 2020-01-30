import React from 'react'
import PropTypes from 'prop-types'

const Prescription = () => (
  <div>
    <div>Add Prescription</div>
    <div className="lens-option" value={lensUpgrades}>Anti-Reflective Coating
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensUpgrades}>Polish
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensUpgrades}>Roll and Polish
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>    
  </div>
)

Prescription.propTypes = {
  RX: PropTypes.array,
  OD: PropTypes.array,
  OS: PropTypes.array,
  PD: PropTypes.array,
  RXname: PropTypes.string,
  add: PropTypes.string,

}

export default Prescription