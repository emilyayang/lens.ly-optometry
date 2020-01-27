import React from 'react'

const LensUpgrades = () => (
  <div>
    <div>Lens Upgrades</div>
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

LensType.propTypes = {
  lensUpgrades: PropTypes.array,
}

export default LensUpgrades