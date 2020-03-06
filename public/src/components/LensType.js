import React from 'react'
import PropTypes from 'prop-types'
import { handleChooseLensType } from '../actions/order.js'
import { connect } from 'react-redux'

const LensType = ({ lensType }) => (
  <div>
    <div>Choose Lens Type</div>
    <div className="lens-option" id="Single Vision" onClick={() => handleChooseLensType("Single Vision")}>Single Vision
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Progressive" onClick={() => handleChooseLensType("Single Vision")}>Progressive
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Bifocal" onClick={() => handleChooseLensType("Single Vision")}>Bifocal
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
    <div className="lens-option" id="Non-prescription" onClick={() => handleChooseLensType("Single Vision")}>Non-prescription
      <div className="lens-option-description">Corrects one field of vision (near, intermediate, or distance)</div>
    </div>
  </div>
)

LensType.propTypes = {
  lensType: PropTypes.string,
}

// export default LensType

const mapStateToProps = state => ({
  lensType: state.lensType,
})

const mapDispatchToProps = dispatch => ({
  handleChooseLensType: (lensType) => {
    dispatch(handleChooseLensType(lensType));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LensType)