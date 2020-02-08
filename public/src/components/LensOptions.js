import React from 'react'
import PropTypes from 'prop-types'

const LensOptions = ({lensOptions, handleChooseLensOption}) => (
  <div>
    <div>Lens Options</div>
    <div className="lens-option" id="Single Vision" onClick={handleChooseLensOption}>No Color
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Single Vision" onClick={handleChooseLensOption}>Blue Light Filtering
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Single Vision" onClick={handleChooseLensOption}>Tinted
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Single Vision" onClick={handleChooseLensOption}>Transitions
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensOptions.propTypes = {
  lensOptions: PropTypes.array,
  handleChooseLensOption: PropTypes.func.isRequired
}

export default LensOptions