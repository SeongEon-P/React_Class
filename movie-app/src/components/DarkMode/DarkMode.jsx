import React, { useState, useEffect } from "react"; // useState와 useEffect를 React에서 임포트

import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

import "./DarkMode.css";

const DarkMode = () => {
  // 다크모드 상태를 관리하기 위해 useState 사용
  const [isDarkMode, setIsDarkMode] = useState(true);


  const setDarkTheme = () =>{
    document.querySelector("body").setAttribute("data-theme", "dark");
  setIsDarkMode(true); // 다크모드 상태 업데이트
}

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setIsDarkMode(false); // 라이트모드 상태 업데이트
  }

  const toggleTheme = (e) => {
    e.target.checked ? setDarkTheme() : setLightTheme();
  };

 // 컴포넌트가 처음 마운트될 때 다크모드로 설정
 useEffect(() => {
  setDarkTheme();
}, []);

  return (
    <div className="dark_mode">
      <input
        onChange={toggleTheme}
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode} // 초기 상태 설정
      />

      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
