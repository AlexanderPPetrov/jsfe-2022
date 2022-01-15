import {Card, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import NoResults from "./NoResults";
import MovieGridItem from "./MovieGridItem";

function FavoriteList(props) {

    const favoriteMovies = useSelector(state => state.favoriteMovies);
    
    function renderFavoriteMovies() {
        if(!favoriteMovies.length) {
            return <NoResults title={'Нямате добавени любими филми'}/>
        }
        return favoriteMovies.map(movie => {
            return <MovieGridItem key={movie.id} movie={movie}/>
        })
    }

    return (
        <Card>
            <Card.Body>
                Favorite list
                <Row>
                    {renderFavoriteMovies()}
                </Row>
            </Card.Body>
        </Card>
    )
}
export default FavoriteList;