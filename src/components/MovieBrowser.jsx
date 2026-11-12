import { useState } from "react"
import MovieResults from "./MovieResults"
import SearchBar from "./SearchBar"

const browseRows = [
  { title: "Spider-Man", query: "Spider-Man" },
  { title: "Batman", query: "Batman" },
  { title: "Star Wars", query: "Star Wars" },
  { title: "Harry Potter", query: "Harry Potter" },
]

function MovieRow({ title, query, showError }) {
  return (
    <section className="movie-row" aria-label={`${title} movies`}>
      <h2>{title}</h2>
      <MovieResults
        query={query}
        layout="row"
        loadingMessage="Loading movies..."
        showError={showError}
      />
    </section>
  )
}

function SearchResults({ query }) {
  return (
    <main className="page-content search-page">
      <h1>Results for <span>“{query.trim()}”</span></h1>
      <MovieResults
        query={query}
        layout="grid"
        loadingMessage="Searching movies..."
      />
    </main>
  )
}

export default function MovieBrowser() {
  const [searchTerm, setSearchTerm] = useState("")
  const isSearching = searchTerm.trim().length > 0

  function clearSearch() {
    setSearchTerm("")
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={clearSearch} aria-label="Notflix home">
          NOTFLIX
        </button>
        {!isSearching && <span className="browse-label">Browse</span>}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onClear={clearSearch}
        />
      </header>

      {isSearching ? (
        <SearchResults query={searchTerm} />
      ) : (
        <main className="page-content browse-page">
          <div className="browse-heading">
            <p>YOUR SCREEN, YOUR STORIES</p>
            <h1>Find your next favorite.</h1>
          </div>
          {browseRows.map((row, index) => (
            <MovieRow key={row.query} {...row} showError={index === 0} />
          ))}
        </main>
      )}
    </div>
  )
}