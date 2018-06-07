import React from 'react'
import PropTypes from 'prop-types'

import FieldSet from './FieldSet'
import { createFieldSetId } from '../utils/frontend'
import { hasPermission } from '../Crudl'

const AddRelationForm = ({ anyTouched, desc, form, error, handleSubmit, onSave, onCancel, labels }) => (
    <form tabIndex="0" onSubmit={handleSubmit(onSave)}>
        {anyTouched && error &&
            <div className="form-error">
                {error}
            </div>
        }
        {desc.fieldsets.map((fs, i) => (
            <FieldSet
                key={i}
                id={createFieldSetId(desc.id, i)}
                desc={fs}
                formName={form}
                />
        ))}
        <div>
            <ul role="group" className="buttons">
                <li><button
                    type="button"
                    className="action-cancel"
                    tabIndex="0"
                    aria-label={labels.cancel}
                    onClick={onCancel}
                    >{labels.cancel}</button>
                </li>
                {hasPermission(desc.id, 'add') &&
                    <li className="opposite"><button
                        type="button"
                        className="action-save"
                        tabIndex="0"
                        aria-label={labels.save}
                        aria-disabled="false"
                        onClick={handleSubmit(onSave)}
                        >{labels.save}</button>
                    </li>
                }
            </ul>
        </div>
    </form>
)

AddRelationForm.propTypes = {
    desc: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
    anyTouched: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.node,
    labels: PropTypes.shape({
        save: PropTypes.string.isRequired,
        cancel: PropTypes.string.isRequired,
    }).isRequired,
}

export default AddRelationForm
