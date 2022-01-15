import moment from "moment";
import constants from "../../constants";

function MovieListItem({title, releaseDate, overview, poster, rating}) {

    function getDate() {
        return moment(releaseDate).format("MMM Do YY"); 
    }

    function getPoster() {
        return `${constants.imageBaseUrl}${poster}`;
    }
    return (
        <>
            <div className="d-flex py-1">
                <img className="movie-poster" src={getPoster()} alt={title}/>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold movie-title">{title}</div>
                            <div className="movie-release-date">{getDate()}</div>
                        </div>
                        <span className="movie-vote badge rounded-pill bg-primary ms-auto">
                            {rating}
                        </span>
                    </div>
                    <div className="movie-overview pt-3">
                        {overview}
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default MovieListItem;