import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import UserList from "./UserList"

export default function UserDirectory() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("Batman")

  useEffect(() => {
    const query = searchTerm.trim()
    if (!query) {
      return
    }

    const controller = new AbortController()
    const timeout = setTimeout(async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&type=movie&apikey=2026b80f`,
          { signal: controller.signal },
        )
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("OMDb rejected the API key. Update it to load movie posters.")
          }
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.Response === "False" && data.Error !== "Movie not found!") {
          throw new Error(data.Error || "Failed to fetch movies")
        }
        setMovies(data.Search || [])
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch movies")
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }, 300)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [searchTerm])

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
        <UserList movies={movies} />
      )}
    </div>
  )
}