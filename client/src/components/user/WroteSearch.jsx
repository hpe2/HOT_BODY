import React from "react";

function WroteSearch({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="filter" />
      <button>Search</button>
    </form>
  );
}

export default WroteSearch;