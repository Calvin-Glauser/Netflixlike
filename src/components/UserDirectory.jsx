import { useState } from "react"
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import useMovieSearch from "../hooks/useMovieSearch"

export default function UserDirectory() {
  const [searchTerm, setSearchTerm] = useState("Batman")
  const { movies, loading, error } = useMovieSearch(searchTerm)

  return (
    <div>
      <h2>Movies</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {error ? (
        <p role="alert">Error: {error}</p>
      ) : !searchTerm.trim() ? (
        <p>Enter a movie title to search.</p>
      ) : loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  )
}