import './MovieList.css';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const MovieList = ({ type, title, emoji, onMovieSelect }) => {
  // 처음 받은 movie 데이터들을 movies state로 관리하기
  const [movies, setMovies] = useState([]);
  // 평점에 따라 영화 걸러내기
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  // 정렬 관리
  const [sort, setSort] = useState({
    by: 'default',
    order: 'asc',
  });

 
  useEffect(() => {
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=317b4d9e8a4070df2a4f68ba2e8f2238&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  fetchMovies();
}, [type]); // type을 의존성 배열에 추가

  // 평점 필터 메서드 만들기 + 한번 더 클릭했을때 모든 영화 보여주기
  const handleFilter = (rate) => {
    if (minRating === rate) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  //select 값을 선택할 때마다. handleSort 함수 실행 sort 객체를 업데이트 한다.
  const handelSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  console.log(sort);

  // sort값이 업데이트 될때마다 그 값으로 정렬
  // 정렬방법이 default가 아닐경우 => 출시일 또는 평점 일 경우에 lodash의 _.orderBy 메서드를 사용해 간단하게 정렬된 데이터를 업데이트 한다.
  // lodash <- import해주기
  //     useEffect(() => {if (sort.by !== 'default') {
  // 			const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
  // 			setFilterMovies(sortedMovies);
  // 		}
  // }, [sort]);

  useEffect(() => {
    if (sort.by !== 'default') {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    } else {
      setFilterMovies(movies);
    }
  }, [sort, filterMovies, movies]);

  return (
    <section className="movie_list" id={`${type}`}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} <img src={emoji} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            {/* 평점 찾기 클릭시 아래 언더바 보이기 */}
            <li
              className={
                minRating === 8
                  ? 'movie_filter_item active'
                  : 'movie_filter_item'
              }
              onClick={() => handleFilter(8)}
            >
              8+ Star
            </li>
            <li
              className={
                minRating === 7
                  ? 'movie_filter_item active'
                  : 'movie_filter_item'
              }
              onClick={() => handleFilter(7)}
            >
              7+ Star
            </li>
            <li
              className={
                minRating === 6
                  ? 'movie_filter_item active'
                  : 'movie_filter_item'
              }
              onClick={() => handleFilter(6)}
            >
              6+ Star
            </li>
          </ul>

          {/* 첫번째 select 태그의 name은 by로 sort 객체의 첫번째 속성값과 같다. 
              두번째 select 태그의 name은 order로 두번째 속성값과 같다. 
              초기값은 각각 default 와 asc이다. */}
          <select
            name="by"
            id=""
            onChange={handelSort}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handelSort}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {/* movies에 있는 영화 갯수만큼 MovieCard 만들기 */}
        {filterMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            description={movie.overview}
            movie={movie}
            onMovieSelect={onMovieSelect} // 영화 선택 시 호출할 함수 전달
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
