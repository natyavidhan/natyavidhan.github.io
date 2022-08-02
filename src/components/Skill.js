import React from 'react'
import PropTypes from 'prop-types'

function Skill(props) {
    let img = "/images/skills/" + props.skill_img;
    return (
        <a href={props.url} target='_blank' rel="noreferrer">
            <div className="skill" url={props.url}>
                <img src={img} alt={props.skill} className="skill-img" />
                <p>
                    <h3>{props.skill}</h3>
                </p>
            </div>
        </a>
    )
}

Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    skill_img: PropTypes.string.isRequired
}

export default Skill
