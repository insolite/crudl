import React from 'react'
import PropTypes from 'prop-types'
import LoadingIndicator from './LoadingIndicator'

const ViewportLoading = props => (
    <main id="viewport">
        <header id="viewport-header">
            <h2>{props.title}</h2>
        </header>
        <div id="viewport-content">
            <LoadingIndicator text={props.loadingText} />
        </div>
    </main>
)

ViewportLoading.propTypes = {
    title: PropTypes.string.isRequired,
    loadingText: PropTypes.string,
}

export default ViewportLoading
