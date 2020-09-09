import React from "react";

function SearchForm() {
  return (
    <>
      <form className="form-inline" id="resource-searchForm">
        <div className="form-group">
          <label className="sr-only">Type to search by term</label>
          <input
            type="text"
            className="form-control"
            id="searchTerm"
            placeholder="Type to search by term"
          />
        </div>
        <button type="submit" className="btn btn-primary" id="search-btn">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchForm;
