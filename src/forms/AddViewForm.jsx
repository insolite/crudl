import React from 'react'
import PropTypes from 'prop-types'

import FieldSet from './FieldSet'
import { createFieldSetId } from '../utils/frontend'
import { addViewShape } from '../PropTypes'
import { hasPermission } from '../Crudl'

/* FIXME (Axel): aria-disabled is a string here, but a boolean with ChangeViewForm. */

const AddViewForm = props => (
    <form tabIndex="0" onSubmit={props.handleSubmit(props.onSave)}>
        {props.anyTouched && props.error &&
            <div className="form-error">
                {props.error}
            </div>
        }
        {props.desc.fieldsets.map((fs, i) => (
            <FieldSet
                key={i}
                id={createFieldSetId(props.desc.id, i)}
                desc={fs}
                formName={props.form}
                onAdd={props.onAdd}
                onEdit={props.onEdit}
                />
        ))}
        <div id="viewport-footer">
            {hasPermission(props.desc.id, 'add') &&
                <ul role="group" className="buttons">
                    <li className="opposite"><button
                        type="button"
                        className="action-save"
                        tabIndex="0"
                        aria-label={props.labels.save}
                        aria-disabled="false"
                        onClick={props.handleSubmit(props.onSave)}
                        >{props.labels.save}</button>
                    </li>
                    <li className="opposite"><button
                        type="button"
                        className="action-save secondary"
                        tabIndex="0"
                        aria-label={props.labels.saveAndContinue}
                        aria-disabled="false"
                        onClick={props.handleSubmit(props.onSaveAndContinue)}
                        >{props.labels.saveAndContinue}</button>
                    </li>
                    <li className="opposite"><button
                        type="button"
                        className="action-save secondary"
                        tabIndex="0"
                        aria-label={props.labels.saveAndAddAnother}
                        aria-disabled="false"
                        onClick={props.handleSubmit(props.onSaveAndAddAnother)}
                        >{props.labels.saveAndAddAnother}</button>
                    </li>
                </ul>
            }
        </div>
    </form>
)

AddViewForm.propTypes = {
    desc: addViewShape,
    onSave: PropTypes.func.isRequired,
    onSaveAndContinue: PropTypes.func.isRequired,
    onSaveAndAddAnother: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
    anyTouched: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.node,
    labels: PropTypes.shape({
        save: PropTypes.string.isRequired,
        saveAndContinue: PropTypes.string.isRequired,
        saveAndAddAnother: PropTypes.string.isRequired,
    }).isRequired,
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default AddViewForm
