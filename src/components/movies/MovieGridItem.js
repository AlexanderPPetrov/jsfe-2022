import moment from "moment";
import constants from "../../constants";

function MovieGridItem({title, releaseDate, overview, poster, rating}) {

    function getDate() {
        return moment(releaseDate).format("MMM Do YY"); 
    }

    function getPoster() {
        return `${constants.imageBaseUrl}${poster}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="grid-movie-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="movie-poster w-50" 
                        src={getPoster()} alt={title}/>
                        <div className="px-2">
                            <div className="movie-vote badge rounded-pill bg-primary">{rating}</div>
                            <div className="fw-bold movie-title py-1">{title}</div>
                            <div className="movie-release-date">{getDate()}</div>
                        </div>
                    </div>
                    <div className="movie-overview pt-3">
                        {overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieGridItem;