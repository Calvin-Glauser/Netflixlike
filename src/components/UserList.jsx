import UserCard from "./UserCard"

export default function UserList({ movies }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "20px" }}>
      {movies.map((movie) => (
        <UserCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}