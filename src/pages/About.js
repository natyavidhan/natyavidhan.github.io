import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id="about-me">
        <h2>About Me</h2>
        <h3>I am a 15-year-old FullStack web, Software and Game developer from India. <br />
            I use python as my main language, with that, I also have Experience with Javascript, a little bit of C# and C as well. <br />
            I have made a few WebApps which are actually useful and can be used daily, I made few software which can also come handy. <br />
            I worked on a few games, individually as well as in a team. I have experience with Godot, Pygame and Construct 2/3 for game development.
        </h3>
        <Link to="/" className='back-btn'>Back to home</Link>
    </div>
  )
}

export default About