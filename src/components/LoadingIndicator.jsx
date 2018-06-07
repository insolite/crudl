import React from 'react'
import PropTypes from 'prop-types'

const LoadingIndicator = props => (
    <div className="loading-indicator">
        <div />
        {props.text && <span>{props.text}</span>}
    </div>
)

LoadingIndicator.propTypes = {
    text: PropTypes.string.isRequired,
}

export default LoadingIndicator
