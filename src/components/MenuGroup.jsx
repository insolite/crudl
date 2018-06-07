import React from 'react'
import PropTypes from 'prop-types'

const MenuGroup = props => (
    <ul>
        <span>{props.label}</span>
        {props.children}
    </ul>
)

MenuGroup.propTypes = {
    children: PropTypes.node,
    label: PropTypes.node,
}

export default MenuGroup
