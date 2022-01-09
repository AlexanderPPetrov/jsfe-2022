import Movie from "./Movie";
import {useMovie} from "../movies/MovieContext";

function MovieList(props) {

    const {movies} = useMovie();
    const renderMovies = () => {
        return movies.map(movie => {
            return <Movie 
                key={movie.id}
                title={movie.title}>
            </Movie>
        })
    }
    return (
        <div>
            {renderMovies()}
        </div>
    )
}
export default MovieList;