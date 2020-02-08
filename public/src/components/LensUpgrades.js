import React from 'react'
import PropTypes from 'prop-types'

const LensUpgrades = ({handleChooseLensUpgrades}) => (
  <div>
    <div>Lens Upgrades</div>
    <div className="lens-option" id="Anti-Reflective Coating" onClick={handleChooseLensUpgrades}>Anti-Reflective Coating
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Polish" onClick={handleChooseLensUpgrades}>Polish
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Roll and Polish" onClick={handleChooseLensUpgrades}>Roll and Polish
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>    
  </div>
)

LensUpgrades.propTypes = {
  lensUpgrades: PropTypes.array,
  handleChooseLensUpgrades: PropTypes.func.isRequired
}

export default LensUpgrades