import React from "react";

export default function QuickSearches({ onSearch }) {
  const quickTerms = [
    { label: "Harry Potter", type: "title" },
    { label: "Stephen King", type: "author" },
    { label: "Programming", type: "subject" },
    { label: "History", type: "subject" },
  ];

  return (
    <div className="quick-searches">
      {quickTerms.map((item) => (
        <button
          key={item.label}
          onClick={() => onSearch(item.label, item.type)}
          className="quick-btn"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
