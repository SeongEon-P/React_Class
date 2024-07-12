import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from '../../assets/star.png';
import "./SingleMovie.css";

const SingleMovie=()=>{
    const { movieId } = useParams();
    const [movie, setMovie]=useState("");
    const [genres, setGenres]=useState([]);
    const [trailerKey, setTrailerKey] = useState(""); // trailerKey 상태 정의

    useEffect(() => {
        fetchSingleMovie();
        fetchTrailer();
    }, [movieId]);

    const fetchSingleMovie = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=ad438ac94b772599d89d5c3e2ebe9856&language=ko`
        );
        const data = await response.json();
        setMovie(data);
        setGenres(data.genres || []);
        console.log(data.genres);
    };

    const fetchTrailer = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ad438ac94b772599d89d5c3e2ebe9856&language=ko`
        );
        const data = await response.json();
        const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        if (trailer) {
            setTrailerKey(trailer.key);
        }
    };



    if (!movie) {
        return <div>Loading...</div>;
    }

    return(
        <div className="single-movie">
            <button className="back-button" onClick={() => window.history.back()}>목록으로 돌아가기</button>
            <div className="movie-details-container">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="movie poster"
                    className="movie_poster"
                />
                <div className="movie-info">
                    <div>영화 아이디 : {movie.id}</div><br/>
                    <div>영화 제목 : {movie.title}</div><br/>
                    <div>original 제목 : {movie.original_title}</div><br/>
                    <div>overview : <p>{movie.overview}</p></div><br/>
                    <p>개봉일 : {movie.release_date}</p><br/>
                    <p className="align_center">
                        평점 : {movie.vote_average}
                        <img src={Star} alt="rating icon" className="card_emoji" />
                    </p><br/>
                    <p>장르 : 
                        {genres.map((genre, idx) =>
                            <span key={idx}>{genre.name} | </span>
                        )}
                    </p><br/>
                    {trailerKey && (
                        <div className="trailer">
                            <h3>영화 트레일러</h3>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default SingleMovie;
