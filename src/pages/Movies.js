import axios from 'axios';
import {useState, useEffect} from "react";
import MovieList from "../components/movies/MovieList";

function Movies(props) {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('https://reactnative.dev/movies.json')
        .then(response => {
            setMovies(response.data.movies);
        })
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <MovieList movies={movies}/>
        </div>
    )
}
export default Movies;