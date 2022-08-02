import React from 'react'
import { Link } from 'react-router-dom'

import Skill from '../components/Skill'

function Skills() {
  return (
    <div id="skills">
        <h2>Skills</h2>
        <Link to="/" className='back-btn'>Back to home</Link>
        <div className="skill-list">
            <Skill skill='Python' skill_img='python.png' url='https://python.org' />
            <Skill skill='Javascript' skill_img='js.png' url='https://javascript.com' />
            <Skill skill='React' skill_img='react.png' url='https://reactjs.org/' />
            <Skill skill='Flask' skill_img='flask.png' url='https://flask.palletsprojects.com/en/2.1.x/' />
            <Skill skill='MongoDB' skill_img='mongodb.webp' url='https://mongodb.com/' />
            <Skill skill='MySQL' skill_img='mysql.png' url='https://www.mysql.com/' />
            <Skill skill='Firebase' skill_img='firebase.png' url='https://firebase.google.com/' />
            <Skill skill='Pygame' skill_img='pygame.webp' url='https://www.pygame.org/' />
            <Skill skill='Godot' skill_img='godot.png' url='https://godotengine.org/' />
            <Skill skill='Bootstrap' skill_img='bootstrap.jpg' url='"https://getbootstrap.com/' />
            <Skill skill='JQuery' skill_img='jquery.png' url='https://jquery.com/' />
            <Skill skill='Figma' skill_img='figma.webp' url='https://www.figma.com/' />
            <Skill skill='Tkinter' skill_img='tkinter.png' url='https://docs.python.org/3/library/tkinter.html' />
        </div>
    </div>
  )
}

export default Skills