import MovieList from "./MovieList"
import useMovieSearch from "../hooks/useMovieSearch"

export default function MovieResults({
  query,
  layout,
  loadingMessage,
  showError = true,
}) {
  const { movies, loading, error } = useMovieSearch(query)
  const statusClassName = layout === "row" ? "row-status" : "search-message"

  if (error && !showError) return null
  if (error) {
    return <p className={statusClassName} role="alert">{error}</p>
  }
  if (loading) {
    return <p className={statusClassName}>{loadingMessage}</p>
  }

  return <MovieList movies={movies} layout={layout} />
}