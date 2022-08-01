import React, { useEffect } from 'react'
import { useState } from 'react';

function Home() {
    const [status, setStatus] = useState("Loading");
    const [img_url, setImg_url] = useState("/images/discord/Loading.svg");

    useEffect(() => {setImg_url("/images/discord/" + status + ".svg")}, [status])

    const fetchStatus = () => {
        fetch("https://api.lanyard.rest/v1/users/579320358063046682")
            .then(res => res.json())
            .then(data => {
                setStatus(data.data.discord_status);
            })
            .catch(err => {
                console.log(err);
            })
    }
    fetchStatus();
    setInterval(fetchStatus, 1500);

    return (
        <div id='home'>
            <div className="profile">
                <div className="discord">
                    <img src={img_url} alt="" className="pfp" />
                    <h2>NatyaCodes#8947</h2>
                </div>
                <h1>Hey! I am <div className="name">Natya Vidhan.</div></h1>
            </div>
            <div className="buttons">
                <button className="home-btn about-me-btn"><i className="bi bi-at"></i>About Me</button>
                <button className="home-btn skills-btn"><i className="bi bi-brush-fill"></i>  Skills</button>
                <button className="home-btn projects-btn"><i className="bi bi-folder-fill"></i>  Projects</button>
                <button className="home-btn github-btn"><i className="bi bi-github"></i>  Github</button>
                <button className="home-btn contact-btn"><i className="bi bi-megaphone-fill"></i>  Contact</button>
            </div>
        </div>
)
}

export default Home