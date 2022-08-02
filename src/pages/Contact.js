import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div id='contact'>
        <h2>Contact</h2>
        <Link to="/" className='back-btn'>Back to home</Link>
        <h3>Want to have a Talk or Collab? You Can contact me on discord (mostly active) or any of the following:</h3>
        <div className="contacts">
            <a style={{marginRight: "1rem"}} href="mailto:natyavidhanbiswas10@gmail.com" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-envelope-fill"></i></a>
            <a style={{marginRight: "1rem"}} href="https://instagram.com/natyavidhan" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a style={{marginRight: "1rem"}} href="https://discord.gg/4JTSvvT8kQ" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-discord"></i></a>
            <a style={{marginRight: "1rem"}} href="https://www.linkedin.com/in/natya-vidhan-biswas-741310189/" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a style={{marginRight: "1rem"}} href="https://reddit.com/u/studious_gamer" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-reddit"></i></a>
            <a style={{marginRight: "1rem"}} href="https://twitter.com/NatyaCodes" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UCb3rnqZcBN9kPx5--yz5A3A" className="contact" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
        </div>
    </div>
  )
}

export default Contact