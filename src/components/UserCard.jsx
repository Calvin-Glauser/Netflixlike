export default function UserCard({ movie }) {
  return (
    <article style={{ minWidth: 0, textAlign: "left" }}>
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          loading="lazy"
          style={{ display: "block", width: "100%", aspectRatio: "2 / 3", objectFit: "cover" }}
        />
      ) : (
        <div
          role="img"
          aria-label={`No poster available for ${movie.Title}`}
          style={{ display: "grid", width: "100%", aspectRatio: "2 / 3", placeItems: "center", background: "#eee", color: "#555", fontSize: "14px" }}
        >
          No poster
        </div>
      )}
      <h3 style={{ margin: "8px 0 0", fontSize: "16px", fontWeight: 500 }}>{movie.Title}</h3>
    </article>
  )
}