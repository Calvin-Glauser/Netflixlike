import { useState } from "react"

export default function MovieCard({ movie }) {
  const [posterFailed, setPosterFailed] = useState(false)
  const hasPoster = movie.Poster && movie.Poster !== "N/A" && !posterFailed

  return (
    <article className="movie-card">
      {hasPoster ? (
        <img
          className="movie-poster"
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          loading="lazy"
          onError={() => setPosterFailed(true)}
        />
      ) : (
        <div
          className="movie-poster-placeholder"
          role="img"
          aria-label={`No poster available for ${movie.Title}`}
        >
          No poster
        </div>
      )}
      <h3>{movie.Title}</h3>
    </article>
  )
}