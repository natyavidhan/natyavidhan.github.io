import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const ContactBtn = (props) => {
    return (
        <a 
            style={{marginRight: "1rem"}} 
            href={props.href}
            className="contact" 
            target="_blank" 
            rel="noreferrer"
        >
            <i className={props.icon}></i>
        </a>
    )
}

ContactBtn.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export const BackBtn = () => {
    return (
        <Link to="/" className='back-btn'>Back to home</Link>
    )
}