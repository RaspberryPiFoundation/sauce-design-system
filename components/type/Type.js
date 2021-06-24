import PropTypes from 'prop-types'
import React from 'react'

const Type = ({ children, className, element }) => {
  const Element = element

  if (className) {
    return (<Element className={className}>{children}</Element>)
  }

  return (<Element>{children}</Element>)
}

Type.defaultProps = {
  className: false,
  element: 'p',
}

Type.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
  element: PropTypes.string,
}

export default Type
