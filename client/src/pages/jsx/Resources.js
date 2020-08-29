import React from "react";
import ResourceCard from "../../components/ResourceCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";

function Resources() {
  return (
    <div className="container">
      <div className="row">
        <h1>Articles and Community Resources</h1>
      </div>
      <div className="row">
        <SearchForm />
        <Pagination />
      </div>
      <div className="row">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
}

export default Resources;
