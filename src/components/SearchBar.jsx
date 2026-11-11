export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      aria-label="Search movies by title"
      placeholder="Search movies by title..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        fontSize: "16px",
        border: "1px solid #ccc"
      }}
    />
  )
}