import React from "react";

export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = ["Recent Searches", "Results"];

  return (
    <div className="tabs" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          role="tab"
          aria-selected={activeTab === tab}
          aria-label={`Switch to ${tab}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
