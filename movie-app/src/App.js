import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState, useEffect } from "react";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading'; 
import SearchBox from './components/SearchBox';


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
    // {
    //   Title: "The Amazing Spider-Man",
    //   Year: "2012",
    //   imdbID: "tt0948470",
    //   Type: "movie",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
    // },
    // {
    //   Title: "The Amazing Spider-Man 2",
    //   Year: "2014",
    //   imdbID: "tt1872181",
    //   Type: "movie",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
    // },
    // {
    //   Title: "The Amazing World of Gumball",
    //   Year: "2011–2019",
    //   imdbID: "tt1942683",
    //   Type: "series",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BYWU1YTA4OGUtNjcxMC00ZTllLTgxYWUtY2U5NmViZTU0MmNjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg"
    // }
  // ]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b7574f5c`;

    const response = await fetch(url);
    const responseJson = await response.json ();
    // console.log(responseJson);
    if (responseJson.Search){
      setMovies(responseJson.Search)
    }
  };

  useEffect(() => {
    if (searchValue.length > 3){
    getMovieRequest(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newList = [...favorites, movie];
    setFavorites(newList);
    saveToLocalStorage(newList);
  };

  const removeMovie = (movie) => {
    const newList = favorites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavorites(newList);
    saveToLocalStorage(newList);
  };


  return (
    <div className='container-fluid movie-app'>
       <div className='row align-items-center my-4'>
        <MovieListHeading heading='영화 검색과 선호작 등록' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
      <MovieList movies={movies}
      handleClick={addFavoriteMovie}
      addMovie={true}/>
      </div>
      <div className="row align-items-center my-4">
      <MovieListHeading heading='내 선호작' />
      <MovieList movies={favorites}
      handleClick={removeMovie}  // 여기에서 handleClick을 removeMovie로 설정
      addMoive={false}/>
      </div>
    </div>
  );
}

export default App;
