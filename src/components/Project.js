import React from 'react'
import PropTypes from 'prop-types'

function Project(props) {
    return (
        <div className='project'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button><a href={props.source} target='_blank' rel="noreferrer">Source Code</a></button>
            {props.demo ? <button><a href={props.demo} target='_blank' rel="noreferrer">Demo</a></button> : ""}
        </div>
    )
}

Project.defaultProps = {
    demo: false
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    demo: PropTypes.string
}

export default Project
