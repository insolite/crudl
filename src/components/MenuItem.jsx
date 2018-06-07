import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { routerShape } from 'react-router/lib/PropTypes'
import { autobind } from 'core-decorators'

import { hideNavigation } from '../actions/frontend'

@autobind
class MenuItem extends React.Component {

    static propTypes = {
        listPath: PropTypes.string,
        addPath: PropTypes.string,
        label: PropTypes.node,
        isActive: PropTypes.bool,
        router: routerShape.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    handleItemClick() {
        if (this.props.listPath) {
            this.props.router.push(this.props.listPath)
            this.props.dispatch(hideNavigation())
        }
    }

    handleAddClick() {
        if (this.props.addPath) {
            this.props.router.push(this.props.addPath)
            this.props.dispatch(hideNavigation())
        }
    }

    render() {
        const { label, listPath, addPath, isActive } = this.props
        return (
            <li>
                { listPath &&
                    <a
                        className={isActive && 'active'}
                        onClick={this.handleItemClick}
                        >{label}
                    </a>
                }
                { addPath &&
                    <button
                        className="action-add icon-only"
                        aria-disabled="false"
                        onClick={this.handleAddClick}
                        >&zwnj;
                    </button>
                }
            </li>
        )
    }
}

export default connect()(withRouter(MenuItem))
