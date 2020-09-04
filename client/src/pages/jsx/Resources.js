import React, { useState, useEffect } from "react";
import ResourceCard from "../../components/ResourceCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API"

function Resources() {

  const [recCard, setResource] = useState([])

  useEffect(() => {
    loadResourceCard()
  }, []);

  function loadResourceCard() {
    API.getArticles()
      .then(res => {
        setResource(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Articles and Community Resources</h1>
      </div>
      <div className="row">
        <SearchForm />
        <Pagination />
      </div>
      {recCard.length ? (
        <div className="row">
          {recCard.map(article => (
            <ResourceCard
              key={article._id}
              title={article.title}
              author={article.author}
              description={article.body}
              dateAdded={article.date_added}
              source={article.source}
            />
          ))}
        </div>
      ) : (
          <h3>No articles to display</h3>
        )}
    </div>
  );
}

export default Resources;
