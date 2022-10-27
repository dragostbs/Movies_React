import Movie from "./Movie";

const Movies = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h5>⛔ Not Found ⛔</h5>
      )}
    </div>
  );
};

export default Movies;
