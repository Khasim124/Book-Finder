import React from "react";

export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = ["history", "Search by subject"];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
