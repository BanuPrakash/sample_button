import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} label - The button level
 * @param {function} onClick - Click event handler
 * @param {string} variant - The button style
 * @returns  {JSXElement} - The Button component
 */
const Button = ({ label, onClick, variant }) => {
    const buttonStyles = {
        primary: { backgroundColor: 'blue', color: 'white' },
        secondary: { backgroundColor: 'gray', color: 'black' }
    }
    const style = buttonStyles[variant] || {}
    return (
        <button style={style} onClick={onClick}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string
}

export default Button;