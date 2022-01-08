import axios from 'axios';
import {useState, useEffect} from "react";
import {Alert} from "react-bootstrap";

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

    const renderMovies = () => {
        return movies.map(movie => {
            return <Alert 
                key={movie.id}
                variant="info" 
                className="d-flex align-items-center">
                {movie.title}
            </Alert>
        })
    }

    return (
        <div>
            {renderMovies()}
        </div>
    )
}
export default Movies;