import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Fire from '../../assets/blue_fire.png';
import Star from '../../assets/blue_star.png';
import Party from '../../assets/blue_time.png';
import LoginIcon from '../../assets/blue_login.png';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    // 처음 마운트될 때 로그인 상태 확인
    checkLoginStatus();

    // 로그인 상태를 주기적으로 확인 (예: 1초마다)
    const intervalId = setInterval(checkLoginStatus, 1000);

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar_brand">
        <h1>MovieApp</h1>
      </Link>

      <div className="navbar_links">
        <DarkMode />
        <Link to="#popular">
          인기작품
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </Link>
        <Link to="#top_rated">
          최고평점
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </Link>
        <Link to="#upcoming">
          최신순
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="navbar_logout_button">
            로그아웃
          </button>
        ) : (
          <Link to="/login">
            로그인
            <img className="navbar_emoji" src={LoginIcon} alt="login icon" />
          </Link>
        )}
      </div>
    </nav>
  );
}
