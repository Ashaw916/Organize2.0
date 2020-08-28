import React from "react";
import ResourceCard from "../../components/ResourceCard";
import SearchForm from "../../components/SearchForm/SearchForm";

function Resources() {
  return (
    <div className="container">
      <div className="row">
        <h1>Articles and Community Resources</h1>
      </div>
      <div className="row">
        <SearchForm />
      </div>

      <div className="card-wrapper">
        <ResourceCard />
      </div>
    </div>
  );
}

export default Resources;
