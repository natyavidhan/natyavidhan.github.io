import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter } from "react-router-dom";

// import App from './App';
import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex flex-col justify-center items-center h-screen w-screen bg-[#101010] overflow-x-clip overflow-y-clip'>
    <div className="absolute top-[64px]">
      <h1 className='text-white text-[18px] mt-[-12px]'>
        Natya Vidhan's Portfolio
      </h1>
    </div>
    <h1 className='text-white text-[32px] mt-[-12px]'>
      🚧 Work in Progress™ 🚧
    </h1>
    <h1 className='text-white text-[1.5rem] mt-1'>
      <a href="https://github.com/studiousgamer" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-github' /></a>
      <a href="mailto:natyavidhanbiswas10@gmail.com" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-envelope-fill' /></a>
      <a href="https://instagram.com/natyavidhan" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-instagram' /></a>
      <a href="https://discord.gg/4JTSvvT8kQ" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-discord' /></a>
      <a href="https://www.linkedin.com/in/natya-vidhan-biswas-741310189/" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-linkedin' /></a>
      <a href="https://reddit.com/u/studious_gamer" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-reddit' /></a>
      <a href="https://twitter.com/NatyaCodes" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-twitter' /></a>
      <a href="https://www.youtube.com/@natyacodes" target="_blank" rel="noreferrer" className='mr-4'><i className='bi bi-youtube' /></a>
    </h1>
  </div>
);
