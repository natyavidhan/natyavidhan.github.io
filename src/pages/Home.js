import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

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
                <Link to="about" className="home-btn"><i className="bi bi-at"></i>About Me</Link>
                <Link to="skills" className="home-btn"><i className="bi bi-brush-fill"></i>  Skills</Link>
                <Link to="projects" className="home-btn"><i className="bi bi-folder-fill"></i> Projects</Link>
                <Link to="github" className="home-btn"><i className="bi bi-github"></i> Github</Link>
                <Link to="conatct" className="home-btn"><i className="bi bi-megaphone-fill"></i> Contact</Link>
            </div>
        </div>
)
}

export default Home