import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Github() {
    let user_name = 'studiousgamer'
    let profile_url = `https://studiousapi.vercel.app/github/profile`;
    let repo_url = `https://api.github.com/users/${user_name}/repos`;

    const [followers, setFollowers] = useState(0);
    const [repos, setRepos] = useState(0);
    const [stars, setStars] = useState(0);
    const [commits, setCommits] = useState(0);
    const [prs, setPrs] = useState(0);
    const [issues, setIssues] = useState(0);
    const [contr, setContr] = useState(0);
    const [toplangs, setToplangs] = useState([]);

    const get_profile = () => {
        fetch(profile_url)
            .then(res => res.json())
            .then(data=>{
                setFollowers(data.followers)
                setRepos(data.repositories)
                setStars(data.stars)
                setCommits(data.commits)
                setPrs(data.prs)
                setIssues(data.issues)
                setContr(data.contributed)
            })
            .catch(err => {
                get_profile()
            })
    }
    
    
    const get_lang_stats = () => {
        let repos = "";
        fetch(repo_url)
            .then(res => res.json())
            .then(data => {
                repos = data;
                var mapper = function(ent){return ent.language},
                reducer = function(stats, lang) {stats[lang] = (stats[lang] || 0) + 1; return stats},
                langStats = repos.map(mapper).reduce(reducer, {});
                delete langStats['null'];
                let top_langs = Object.keys(langStats).sort(function(a,b){return langStats[b] - langStats[a]});
                setToplangs(top_langs);
        });
    };

    get_profile();
    get_lang_stats();

    return (
        <div id='github'>
            <h2>Github</h2>
            <a href="https://github.com/studiousgamer" className="back-btn" target="_blank" rel="noreferrer">Open in New tab</a>
            <Link to="/" className='back-btn' style={{margin: "0.5rem"}}>Back to home</Link>
            <div className="stats">
                <h3 className="profile-stats">
                    <p>Profile</p>
                    <ul>
                        <li>Followers: {followers}</li>
                        <li>Repositories: {repos}</li>
                        <li>Stars: {stars}</li>
                        <li>Commits: {commits}</li>
                        <li>Pull Requests: {prs}</li>
                        <li>Issues: {issues}</li>
                        <li>Contributed To: {contr}</li>
                    </ul>
                </h3>
                <div className="lang-stats">
                    <p>Most Used Languages</p>
                    <h3>
                        <ul className="lang-list">
                            {
                                toplangs.map((lang, index)=>{
                                    return <li><span className='lang-name'>{lang}</span></li>
                                })
                            }
                        </ul>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Github