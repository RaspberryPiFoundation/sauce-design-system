import PropTypes from 'prop-types'
import React from 'react'

const Type = ({ children, className, element }) => {
  const Element = element
  return (
    <Element className={className}>{children}</Element>
  )
}

Type.defaultProps = {
  className: '',
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
