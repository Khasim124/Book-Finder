import React from "react";

export default function BookCard({ book }) {
  // Pick cover or fallback
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no-cover.svg";

  return (
    <div className="book-card">
      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={coverUrl}
          alt={book.title ? `Cover of ${book.title}` : "No cover available"}
          className="book-cover"
          onError={(e) => {
            e.target.onerror = null; // avoid infinite loop
            e.target.src = "/no-cover.svg";
          }}
        />
      </a>

      <div className="book-info">
        <h3 className="book-title">{book.title || "Untitled"}</h3>
        <p className="book-author">
          {book.author_name?.[0] || "Unknown Author"}
        </p>
        <p className="book-year">{book.first_publish_year || "Year N/A"}</p>
      </div>
    </div>
  );
}
