import PropTypes from 'prop-types'
import React from 'react'

const Type = ({ children, className, element }) => {
  const Element = element
  return (
    <Element className={`heading-${className}`}>{children}</Element>
  )
}

Type.defaultProps = {
  element: 'p',
}

Type.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.object,
  ]),
  className: PropTypes.string.isRequired,
  element: PropTypes.string,
}

export default Type
