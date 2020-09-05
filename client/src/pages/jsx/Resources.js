import React, { useState, useEffect } from "react";
// import { getArticles } from "../../resources/articles";
import ResourceCard from "../../components/ResourceCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API"

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
          <div className="col-12">
            <SearchForm />
          </div>
          <div className="col-12">
            <Pagination />
          </div>
        </div>
        <div className="row">
          {articles.map((article) => (
            <div className="col-12" key={article._id}>
              <div className="card mb-5">
                <img
                  className="card-img-top"
                  src="https://as1.ftcdn.net/jpg/03/68/24/20/500_F_368242078_CHu01PzCx3vuOcUmbkledyiGZug6hOPk.jpg"
                  alt="Card image cap"
                  style={{ width: "100%", height: "50px" }}
                />
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
