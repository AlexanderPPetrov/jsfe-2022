import axios from 'axios';
import {useState, useEffect} from "react";
import MovieList from "../components/movies/MovieList";
import Filters from "../components/filters/Filters";
import {Col} from "react-bootstrap";

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
        <>
        <Col md={3} >
            <Filters/>
        </Col>
        <Col>
            <MovieList movies={movies}/>
        </Col>
        </>
    )
}
export default Movies;