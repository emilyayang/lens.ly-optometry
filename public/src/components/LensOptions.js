import React from 'react'

const LensOptions = ({lensOptions}) => (
  <div>
    <div>Lens Options</div>
    <div className="lens-option" value={lensOptions}>No Color
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensOptions}>Blue Light Filtering
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensOptions}>Tinted
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" value={lensOptions}>Transitions
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensType.propTypes = {
  lensOptions: PropTypes.array,
}

export default LensOptions