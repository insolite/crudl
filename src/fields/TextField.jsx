import React from 'react'
import PropTypes from 'prop-types'
import baseField from './base/baseField'
import { baseFieldPropTypes } from '../PropTypes'

export class TextField extends React.Component {

    static propTypes = {
        id: baseFieldPropTypes.id,
        placeholder: PropTypes.string,
        input: baseFieldPropTypes.input,
        disabled: baseFieldPropTypes.disabled,
        readOnly: baseFieldPropTypes.readOnly,
    }

    render() {
        const { id, placeholder, input, disabled, readOnly } = this.props
        const applyReadOnly = !disabled && readOnly
        return (
            <div className="field">
                <input
                    type="text"
                    placeholder={placeholder}
                    id={id}
                    autoComplete="off"
                    {...input}
                    data-field-display-name={id}
                    data-field-display-values={input.value}
                    readOnly={applyReadOnly}
                    disabled={disabled}
                    />
            </div>
        )
    }
}

export default baseField(TextField)
