import MovieCard from "./MovieCard"

export default function MovieList({ movies, layout = "grid" }) {
  if (movies.length === 0) {
    return <p className="search-message">No movies found.</p>
  }

  return (
    <div className={`movie-list movie-list--${layout}`}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}