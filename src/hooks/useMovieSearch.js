import { useEffect, useState } from "react"

const API_KEY = "2026b80f"

export default function useMovieSearch(query) {
  const [searchState, setSearchState] = useState({ movies: [], loading: true, error: null })

  useEffect(() => {
    const searchQuery = query.trim()
    if (!searchQuery) return

    const controller = new AbortController()
    const timeoutId = setTimeout(async () => {
      setSearchState((currentState) => ({ ...currentState, loading: true, error: null }))

      try {
        const url = new URL("https://www.omdbapi.com/")
        url.search = new URLSearchParams({
          s: searchQuery,
          type: "movie",
          apikey: API_KEY,
        })
        const response = await fetch(url, { signal: controller.signal })

        if (response.status === 401) {
          throw new Error("OMDb rejected the API key. Update it to load movie posters.")
        }
        if (!response.ok) {
          throw new Error(`Movie search failed with status ${response.status}.`)
        }

        const responseData = await response.json()
        if (responseData.Response === "False" && responseData.Error !== "Movie not found!") {
          throw new Error(responseData.Error || "Movie search failed.")
        }

        setSearchState({ movies: responseData.Search || [], loading: false, error: null })
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setSearchState({
            movies: [],
            loading: false,
            error: requestError.message || "Movie search failed.",
          })
        }
      }
    }, 300)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [query])

  return searchState
}