import React from "react";
import BookCard from "./BookCard";

export default function ResultsGrid({ books }) {
  if (!books || books.length === 0) {
    return (
      <p className="no-results">
        No results found. Try another search or adjust filters.
      </p>
    );
  }

  return (
    <div className="results-grid">
      {books.map((book, idx) => (
        <BookCard key={book.key || idx} book={book} />
      ))}
    </div>
  );
}
