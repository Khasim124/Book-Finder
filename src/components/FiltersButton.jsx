import React, { useState, useEffect, useRef } from "react";

export default function FiltersButton({ onFilter }) {
  const [year, setYear] = useState("");
  const [show, setShow] = useState(false);
  const popupRef = useRef();

  const applyFilter = () => {
    onFilter({ year });
    setShow(false);
  };

  useEffect(() => {
    if (show && popupRef.current) {
      const rect = popupRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        popupRef.current.style.left = "auto";
        popupRef.current.style.right = "0";
      } else {
        popupRef.current.style.left = "0";
        popupRef.current.style.right = "auto";
      }
    }
  }, [show]);

  return (
    <div className="filters-container">
      <button
        onClick={() => setShow(!show)}
        className="filters-btn"
        aria-haspopup="true"
        aria-expanded={show}
      >
        Filters
      </button>

      {show && (
        <div className="filters-popup" ref={popupRef}>
          <label>
            Year:{" "}
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="e.g., 2020"
              aria-label="Filter by year"
            />
          </label>
          <button
            onClick={applyFilter}
            className="apply-btn"
            aria-label="Apply filters"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
