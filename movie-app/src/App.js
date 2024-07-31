import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Fire from "./assets/blue_fire.png";
import Star from "./assets/blue_star.png";
import Party from "./assets/blue_time.png";
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"; // Login 컴포넌트 임포트
import Signup from "./components/Signup/Signup"; // Signup 컴포넌트 임포트



function App() {
  // 상태 관리: 현재 표시할 컴포넌트 (영화 목록 또는 상세 정보) 및 선택된 영화 ID
  const [currentView, setCurrentView] = useState('movieList');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // 영화 상세 정보 보기로 전환하는 함수
  const handleMovieSelect = (movieId) => {
    setSelectedMovieId(movieId);
    setCurrentView('detailMovie');
  };

  // 영화 목록 보기로 전환하는 함수
  const handleBackToList = () => {
    setCurrentView('movieList');
    setSelectedMovieId(null);
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <MovieList type='popular' title='인기작품' emoji={Fire} onMovieSelect={handleMovieSelect} />
              <MovieList type='top_rated' title='최고평점' emoji={Star} onMovieSelect={handleMovieSelect} />
              <MovieList type='upcoming' title='최신순' emoji={Party} onMovieSelect={handleMovieSelect} />
            </>
          }
          />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/singleMovie/:movieId" element={<SingleMovie onBack={handleBackToList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

