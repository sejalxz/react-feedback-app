import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled = {isDisabled} className = {`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    isDisabled: false,
    version: 'secondary',
    type: 'button'
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
