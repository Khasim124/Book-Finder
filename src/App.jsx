import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import FiltersButton from "./components/FiltersButton";
import SearchBar from "./components/SearchBar";
import QuickSearches from "./components/QuickSearches";
import ResultsGrid from "./components/ResultsGrid";
import { fetchBooks } from "./api/openLibrary";

export default function App() {
  const [activeTab, setActiveTab] = useState("Recent Searches");
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [history, setHistory] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query, type = "q") => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const docs = await fetchBooks(query, type);
      setAllBooks(docs);
      setBooks(applyFilters(docs));
      setHistory((prev) =>
        [query, ...prev.filter((h) => h !== query)].slice(0, 5)
      );
    } catch {
      setError("Failed to fetch books. Try again.");
    } finally {
      setLoading(false);
      if (activeTab === "Recent Searches") setActiveTab("Results");
    }
  };

  const applyFilters = (data) =>
    filters.year
      ? data.filter(
          (book) => book.first_publish_year === parseInt(filters.year, 10)
        )
      : data;

  useEffect(() => {
    setBooks(applyFilters(allBooks));
  }, [filters, allBooks]);

  return (
    <div className="app">
      <h1 className="app-title">📚 BookFinder</h1>
      <p className="app-subtitle">Search and discover books easily.</p>

      <div className="top-bar">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <FiltersButton onFilter={setFilters} />
      </div>

      <SearchBar onSearch={handleSearch} />
      <QuickSearches onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {activeTab === "Recent Searches" ? (
        <div className="history">
          <h3>Recent Searches</h3>
          <ul>
            {history.map((item, idx) => (
              <li key={idx}>
                <button
                  className="history-btn"
                  onClick={() => handleSearch(item)}
                  aria-label={`Search again for ${item}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ResultsGrid books={books} />
      )}
    </div>
  );
}
