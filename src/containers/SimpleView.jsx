import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import SimpleForm from '../forms/SimpleForm'
import getFieldNames from '../utils/getFieldNames'
import getInitialValues from '../utils/getInitialValues'
import getValidator from '../utils/getValidator'


class SimpleView extends React.Component {

    static propTypes = {
        desc: PropTypes.object.isRequired,
    }

    componentWillMount() {
        // Initialize the redux form
        const { desc } = this.props
        this.initialValues = getInitialValues(desc)

        const formSpec = {
            form: desc.id,
            fields: getFieldNames(desc),
            validate: getValidator(desc),
            touchOnBlur: false,
            enableReinitialize: true,
        }

        const formProps = { desc }

        this.simpleForm = React.createElement(reduxForm(formSpec)(SimpleForm), formProps)
    }

    render() {
        const { desc } = this.props
        return (
            <div>
                {desc.title && <h2>{desc.title}</h2> }
                {this.simpleForm}
            </div>
        )
    }
}

export default SimpleView
