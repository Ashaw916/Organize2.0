import React from "react";

function SearchForm() {
  return (
    <>
      <form className="form-inline">
        <div className="form-group mb-2">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="searchArticles"
            value="Search Articles"
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label className="sr-only">Type to search by term</label>
          <input
            type="text"
            className="form-control"
            id="searchTerm"
            placeholder="Type to search by term"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 ml-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default SearchForm;
