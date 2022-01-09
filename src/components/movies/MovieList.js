import Movie from "./Movie";

function MovieList(props) {
    const renderMovies = () => {
        return props.movies.map(movie => {
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