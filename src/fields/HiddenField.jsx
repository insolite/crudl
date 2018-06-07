import React from 'react'
import PropTypes from 'prop-types'
import { baseFieldPropTypes } from '../PropTypes'

const HiddenField = props => (
    <input type="hidden" {...props.input} />
)

HiddenField.propTypes = baseFieldPropTypes

export default HiddenField
