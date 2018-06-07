import React from 'react'
import PropTypes from 'prop-types'

import ContinuousPagination from '../components/ContinuousPagination'
import NumberedPagination from '../components/NumberedPagination'


export class Pagination extends React.Component {

    static propTypes = {
        // pagingation info obtained from action responses
        pagination: PropTypes.object,
        // Callback
        onRequestPage: PropTypes.func.isRequired,
        // the currently displayed results
        results: PropTypes.array.isRequired,
        // Whether the results were filtered or not
        filtered: PropTypes.bool.isRequired,
        // True if the new results are currently being loaded
        loading: PropTypes.bool.isRequired,
        // Optional custom pagination Component
        paginationComponent: PropTypes.any,
    };

    render() {
        const { paginationComponent, ...other } = this.props

        if (paginationComponent) {
            const comp = paginationComponent(other.pagination)
            if (comp) {
                return React.createElement(comp, other)
            }
        }

        if (other.pagination && other.pagination.type === 'numbered') {
            return <NumberedPagination {...other} />
        }

        if (other.pagination && other.pagination.type === 'continuous') {
            return <ContinuousPagination {...other} />
        }

        if (other.pagination) {
            console.warn(`Uknown type '${other.pagination.type}' of the provided pagination.
            The pagination object must define a valid property 'type'.
            Default types include 'continuous' and 'numbered'.`);
        }

        return false
    }
}

export default Pagination
