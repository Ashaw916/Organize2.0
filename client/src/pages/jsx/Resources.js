import React, { useState, useEffect } from "react";
// import { getArticles } from "../../resources/articles";
import API from "../../utils/API";
import ResourceCard from "../../components/ResourceCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";

function Resources() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);
  // Loads all books and sets them to books
  function loadArticles() {
    API.getArticles()
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Articles and Community Resources</h1>
        </div>
        <div className="row">
          <SearchForm />
          <Pagination />
        </div>
        <div className="row">
          {articles.map((article) => (
            <div className="row">
              <div className="col-2 mb-4" id="resource-image">
                Sidebar or images here
              </div>

              <div className="col-10 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Title: {article.title}</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Author: {article.author}</h5>
                    <p>Brief Description: {article.description}</p>
                    <p className="card-text">{article.body}</p>
                    <a href={article.source} className="btn btn-primary">
                      source: {article.source}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;
