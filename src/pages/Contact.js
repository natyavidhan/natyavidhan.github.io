import React from 'react'
import { BackBtn } from '../components/misc'
import { ContactBtn } from '../components/misc';

function Contact() {
  return (
    <div id='contact'>
        <h2>Contact</h2>
        <BackBtn />
        <h3>Want to have a Talk or Collab? You Can contact me on discord (mostly active) or any of the following:</h3>
        <div className="contacts">
            <ContactBtn href='mailto:natyavidhanbiswas10@gmail.com'  icon='bi bi-envelope-fill' />
            <ContactBtn href='https://instagram.com/natyavidhan'  icon='bi bi-instagram' />
            <ContactBtn href='"https://discord.gg/4JTSvvT8kQ'  icon='bi bi-discord' />
            <ContactBtn href='https://www.linkedin.com/in/natya-vidhan-biswas-741310189/'  icon='bi bi-linkedin' />
            <ContactBtn href='https://reddit.com/u/studious_gamer'  icon='bi bi-reddit' />
            <ContactBtn href='https://twitter.com/NatyaCodes'  icon='bi bi-twitter' />
            <ContactBtn href='https://www.youtube.com/channel/UCb3rnqZcBN9kPx5--yz5A3A'  icon='bi bi-youtube' />
        </div>
    </div>
  )
}

export default Contact