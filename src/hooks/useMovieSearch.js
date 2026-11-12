import { useEffect, useState } from "react"

const API_KEY = "2026b80f"

export default function useMovieSearch(query) {
  const [result, setResult] = useState({ movies: [], loading: true, error: null })

  useEffect(() => {
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return

    const controller = new AbortController()
    const timeoutId = setTimeout(async () => {
      setResult((current) => ({ ...current, loading: true, error: null }))

      try {
        const url = new URL("https://www.omdbapi.com/")
        url.search = new URLSearchParams({
          s: trimmedQuery,
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

        const data = await response.json()
        if (data.Response === "False" && data.Error !== "Movie not found!") {
          throw new Error(data.Error || "Movie search failed.")
        }

        setResult({ movies: data.Search || [], loading: false, error: null })
      } catch (error) {
        if (!controller.signal.aborted) {
          setResult({ movies: [], loading: false, error: error.message || "Movie search failed." })
        }
      }
    }, 300)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [query])

  return result
}