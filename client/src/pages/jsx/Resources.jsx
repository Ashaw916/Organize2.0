import React, { Component } from "react";
import { paginate } from "../../utils/paginate";
import Pagination from "../../components/Pagination/Pagination";
import SearchForm from "../../components/SearchForm/SearchForm";
import API from "../../utils/API";

class Resources extends Component {
  state = {
    articles: [],
    pageSize: 5,
    currentPage: 1,
  };

  componentDidMount() {
    API.getArticles().then((res) => {
      const articles = res.data;
      this.setState({ articles });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePreviousPageChange = () => {
    this.setState((state) => {
      if (state.currentPage <= 1) {
        return { currentPage: 1 };
      }
      return { currentPage: state.currentPage - 1 };
    });
  };

  handleNextPageChange = () => {
    this.setState((state) => {
      const totalPages = Math.ceil(state.articles.length / state.pageSize);
      console.log(totalPages);
      if (state.currentPage >= totalPages) {
        return { currentPage: totalPages };
      }
      return { currentPage: state.currentPage + 1 };
    });
  };

  render() {
    const { length: count } = this.state.articles;
    const { articles: allArticles, currentPage, pageSize } = this.state;

    const articles = paginate(allArticles, currentPage, pageSize);

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
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                onNextPageChange={this.handleNextPageChange}
                onPreviousPageChange={this.handlePreviousPageChange}
              />
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
                    <a
                      href={article.source}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      source: {article.source}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            onNextPageChange={this.handleNextPageChange}
            onPreviousPageChange={this.handlePreviousPageChange}
          />
        </div>
      </>
    );
  }
}

export default Resources;
