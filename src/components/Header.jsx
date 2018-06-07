import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumbs from '../components/Breadcrumbs'

const Header = props => (
    <header id="viewport-header">
        <Breadcrumbs {...props} />
        {props.children}
    </header>
)

Header.propTypes = {
    children: PropTypes.node,
}

export default Header
