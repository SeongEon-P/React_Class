import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


function App() {
  const [favourites, setFavourites] = useState([]);

  const [searchValue, setSearchValue]=useState("");
  const [movies, setMovies]=useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=510c0c16`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    // console.log(responseJson);
  };

  const removeMovie = (movie) => {
    const newList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newList);
    saveToLocalStorage(newList);
  };
  useEffect(() => {
    if(searchValue.length >3){
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('favourites'));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, [favourites]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newList = [...favourites, movie];
    console.log(newList);
    setFavourites(newList);
    saveToLocalStorage(newList);
  };
 
  // const [movies, setMovies] = useState([
  //   {
  //     Title: "The Amazing Spider-Man",
  //     Year: "2012",
  //     imdbID: "tt0948470",
  //     Type: "movie",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
  //   },
  //   {
  //     Title: "The Amazing Spider-Man 2",
  //     Year: "2014",
  //     imdbID: "tt1872181",
  //     Type: "movie",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
  //   },
  //   {
  //     Title: "The Amazing World of Gumball",
  //     Year: "2011–2019",
  //     imdbID: "tt1942683",
  //     Type: "series",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BYWU1YTA4OGUtNjcxMC00ZTllLTgxYWUtY2U5NmViZTU0MmNjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg"
  //   }
  // ]);
  return (
    <div className="container-fluid movie-app">
      <div className='row align-items-center my-4'>
        <MovieListHeading heading='영화 검색과 선호작 등록'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {/* <div className='row'> */}
        <div className="row scroll-container">
          <MovieList movies={movies} handleClick={addFavouriteMovie} addMovie={true}/>
        </div>
      {/* </div> */}
      <div className='row align-items-center my-4'>
        <MovieListHeading heading='내 선호작' />
        <MovieList movies={favourites} handleClick={removeMovie} addMovie={false}/>
      </div>
    </div>
  );
}

export default App;
