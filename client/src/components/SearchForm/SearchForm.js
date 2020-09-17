import React from "react";

function SearchForm(props) {
  const { search, update, handleClearSearch } = props;

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
            value={search}
            onChange={update}
          />
        </div>
        <button
          type="reset"
          className="btn btn-primary ml-2"
          id="search-btn"
          // onClick={() => handleClearSearch()}
        >
          Clear
        </button>
      </form>
    </>
  );
}

export default SearchForm;
