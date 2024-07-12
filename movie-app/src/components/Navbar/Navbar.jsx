import React from 'react';

import Fire from '../../assets/blue_fire.png';

import Star from '../../assets/blue_star.png';
import Party from '../../assets/blue_time.png';
import Login from '../../assets/blue_login.png';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          인기작품
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </a>
        <a href="#top_rated">
          최고평점
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </a>
        <a href="#upcoming">
          최신순
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </a>
        <a href="#login">
          로그인
          <img className="navbar_emoji" src={Login} alt="party emoji" />
        </a>


      </div>
    </nav>
  );
}
