import './MovieCard.css';
import Star from '../../assets/star.png';

const MovieCard = ({
  title,
  posterPath,
  releaseDate,
  description,
  voteAverage,
  id,
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  // export default function MovieCard() {
  return (
    // 클릭시 영화 페이지 보여주기
    <a
      href={`https://www.themoviedb.org/movie/${id}?language=ko`}
      target="_blank"
      className="movie_card"
    >
      <img
        // src="https://t1.daumcdn.net/movie/947a0d62f2772aa0f5c73b86b631779ef1183879"
        // alt="movie poster"
        // className="movie_poster"
        src={posterUrl}
        alt={`${title} poster`}
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_center movie_date_rate">
          {/* 개봉일 */}
          <p>{releaseDate}</p>
          <p className="align_center">
            {/* 평점 */}
            {voteAverage}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {/* 영화 내용 설명 */}
          {/* 삼항연산자를 사용하여 영화 내용이 100자가 넘어갈시 그 뒤로는 ...으로 표시 */}
          {description.length > 100
            ? description.slice(0, 100) + '...'
            : description}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
