import React from 'react'
import PropTypes from 'prop-types'

const TabPanel = ({ children, index, hidden }) => (
    <div id={`panel${index}`} role="tabpanel" aria-labelledby={`tab${index}`} aria-hidden={hidden}>
        {children}
    </div>
)

TabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
    children: PropTypes.node,
}

export default TabPanel
