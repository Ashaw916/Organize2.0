import React, { useState, useEffect } from "react";
// import { getArticles } from "../../resources/articles";
import ResourceCard from "../../components/ResourceCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API";
import "../css/Resources.css";
import Newsgroup from "../../images/newsgroup.png";
import Newsprotest from "../../images/newsprotest.png";
import Newswoman from "../../images/newswoman.png";

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
        <div className="jumbotron jumbotron-fluid" id="resource-jumbo">
          <div className="container" id="jumbo-height">
            <p id="resource-subhead">articles and community resources</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4 id="search-title">Search Resources</h4>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <SearchForm />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Pagination />
          </div>
        </div>
        <div className="row">
          <div className="col-3 img-responsive" id="image-wrapper">
            <div className="news-pic-wrapper">
              <img className="news-pic" src={Newsgroup} />
            </div>
            <div className="news-pic-wrapper">
              {" "}
              <img className="news-pic" src={Newsprotest} />
            </div>
            <div className="news-pic-wrapper">
              <img className="news-pic" src={Newswoman} />
            </div>
          </div>

          <div className="col-9" id="resource-wrapper">
            {articles.map((article) => (
              <div className="col-12" key={article._id}>
                <div className="card mb-5">
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
            ))}
          </div>
        </div>
      </div>
    </>

    // Possibly Aaron's code?
    //   const [recCard, setResource] = useState([])

    //   useEffect(() => {
    //     loadResourceCard()
    //   }, []);

    //   function loadResourceCard() {
    //     API.getArticles()
    //       .then(res => {
    //         setResource(res.data)
    //         console.log(res)
    //       })
    //       .catch(err => console.log(err))
    //   }

    //   return (
    //     <div className="container">
    //       <div className="row">
    //         <h1>Articles and Community Resources</h1>
    //       </div>
    //       <div className="row">
    //         <SearchForm />
    //         <Pagination />
    //       </div>

    //       {recCard.length ? (
    //         <div className="row">
    //           {recCard.map(article => (
    //             <ResourceCard
    //               key={article._id}
    //               title={article.title}
    //               author={article.author}
    //               description={article.body}
    //               dateAdded={article.date_added}
    //               source={article.source}
    //             />
    //           ))}
    //         </div>

    //       ) : (
    //           <h3>No articles to display</h3>
    //         )}

    //     </div>
  );
}

export default Resources;
