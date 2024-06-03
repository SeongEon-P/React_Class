import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './sources/Home';
import About from './sources/About';
import Profile from './sources/Profile';
import User from './sources/User';
import Profiles from './sources/Profiles';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/info">info</Link></li>
        <li><Link to="/user?id=aa123&age=20">회원페이지</Link></li>
        <li><Link to="/profiles">프로필</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/user" element={<User />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
