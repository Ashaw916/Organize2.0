import React from "react";

function SearchForm() {
  return (
    <>
      <form className="form-inline">
        <div className="form-group mb-2">
          <label for="staticEmail2" className="sr-only">
            Email
          </label>
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail2"
            value="Search Articles"
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" className="sr-only">
            Type to search by term
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Type to search by term"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default SearchForm;
