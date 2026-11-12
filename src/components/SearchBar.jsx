export default function SearchBar({ searchTerm, setSearchTerm, onClear }) {
  return (
    <div className="search-control">
      <span className="search-icon" aria-hidden="true" />
      <input
        type="search"
        aria-label="Search movies by title"
        placeholder="Titles, people, genres"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") onClear()
        }}
      />
      {searchTerm && (
        <button type="button" className="search-clear" onClick={onClear} aria-label="Clear search">
          ×
        </button>
      )}
    </div>
  )
}