import React from 'react'
import PropTypes from 'prop-types'

const MenuContainer = props => (
    <ul>
        {props.children}
    </ul>
)

MenuContainer.propTypes = {
    children: PropTypes.node,
}

export default MenuContainer
