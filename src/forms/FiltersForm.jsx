import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import FieldLoader from './FieldLoader'
import { filtersShape } from '../PropTypes'

const FiltersForm = ({ handleSubmit, onClear, desc, onRegisterFilterField, submitting }) => (
    <form onSubmit={handleSubmit}>
        {desc.fields.map(d =>
            <Field
                key={d.name}
                name={d.name}
                formName={desc.id}
                desc={d}
                label={d.label}
                registerFilterField={obj => onRegisterFilterField(d, obj)}
                onAdd={() => undefined}
                onEdit={() => undefined}
                component={FieldLoader}
                />
        )}
        <div className="footer">
            <div role="group" className="buttons">
                <button
                    type="button"
                    className="action-clear boundless"
                    tabIndex={submitting ? '-1' : '0'}
                    aria-disabled={submitting}
                    disabled={submitting}
                    onClick={() => onClear()}
                    >Clear</button>
                <button
                    type="button"
                    className="action-apply boundless"
                    tabIndex={submitting ? '-1' : '0'}
                    aria-disabled={submitting}
                    disabled={submitting}
                    onClick={handleSubmit}
                    >Apply</button>
            </div>
        </div>
    </form>
)

FiltersForm.propTypes = {
    desc: filtersShape,
    onClear: PropTypes.func.isRequired,
    onRegisterFilterField: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
}

export default FiltersForm
