import React from "react";

export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no-cover.png"; // <-- local placeholder in public/

  return (
    <div className="book-card">
      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={coverUrl}
          alt={`Cover of ${book.title}`}
          className="book-cover"
          onError={(e) => (e.target.src = "/no-cover.png")}
        />
      </a>
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
      <p className="book-year">
        {book.first_publish_year ? book.first_publish_year : "Year N/A"}
      </p>
    </div>
  );
}
