import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id="about-me">
        <h2>About Me</h2>
        <h3>I am a 16-year-old FullStack web, software, and Game developer from Delhi, India. <br />
I use python as my primary language, and with that, I have Experienced with Javascript, a little bit of C#, and C as well. <br />
I have been developing for almost 2 years now, and I am still learning new things every day. <br />
I Made lots of useful and functional software, web apps/websites, games, automation scripts, and much more during the span of these 2 years. <br />
        </h3>
        <Link to="/" className='back-btn'>Back to home</Link>
    </div>
  )
}

export default About