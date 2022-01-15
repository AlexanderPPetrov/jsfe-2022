import MovieListItem from "./MovieListItem";
import NoResults from "./NoResults";
import {Card, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import MovieGridItem from "./MovieGridItem";
import { useSelector, useDispatch } from 'react-redux';
import { setListView } from "../../redux/actions";

function MovieList(props) {

    const listView = useSelector((state) => state.listView);
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies);

    const renderMovies = () => {
        if(!movies.length) {
            return <NoResults/>
        }
        return listView ? getMovieListItems() : getMovieGridItems();
    }

    function getMovieListItems() {
        return movies.map(movie => {
            return <MovieListItem 
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
                poster={movie.poster_path}
                rating={movie.vote_average}
                >
            </MovieListItem>
        })
    }

    function getMovieGridItems() {
        return movies.map(movie => {
            return <MovieGridItem 
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
                poster={movie.poster_path}
                rating={movie.vote_average}
                >
            </MovieGridItem>
        })
    }

    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Резултат</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary': 'outline-primary'}
                            onClick={()=> dispatch(setListView(true))}>
                            <FontAwesomeIcon icon={faThList}/>
                        </Button>
                        <Button variant={listView ? 'outline-primary': 'primary'}
                            onClick={()=> dispatch(setListView(false))}>
                            <FontAwesomeIcon icon={faGripHorizontal}/>
                        </Button>
                    </ButtonGroup>
                </div>
                <hr/>
                <div className="row">
                    {renderMovies()}
                </div>
            </Card.Body>
        </Card>

    )
}
export default MovieList;