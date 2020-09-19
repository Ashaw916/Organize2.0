import React, { Component } from "react";
import { paginate } from "../../utils/paginate";
import Pagination from "../../components/Pagination/Pagination";
import SearchForm from "../../components/SearchForm/SearchForm";
import API from "../../utils/API";
import moment from "moment";
import "../css/Resources.css";
import Newsgroup from "../../images/newsgroup.png";
import Newsprotest from "../../images/newsprotest.png";
import Newswoman from "../../images/newswoman.png";
import NavTabs from "../../components/NavTabs/NavTabs";

class Resources extends Component {
  state = {
    articles: [],
    pageSize: 3,
    currentPage: 1,
    searchTerm: "",
    searchResults: [],
  };

  componentDidMount() {
    API.getArticles().then((res) => {
      const articles = res.data.reverse();
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

  handleSearchEvent(event) {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value, currentPage: 1 });
  }

  handleClearSearch(event) {
    event.preventDefault();
    this.setState({ searchTerm: "", currentPage: 1 });
  }

  render() {
    const {
      articles: allArticles,
      currentPage,
      pageSize,
      searchTerm,
    } = this.state;

    const filtered =
      searchTerm !== ""
        ? allArticles.filter(
            (article) =>
              article.title.includes(searchTerm) ||
              article.body.includes(searchTerm) ||
              article.title.toLowerCase().includes(searchTerm) ||
              article.body.toLowerCase().includes(searchTerm)
          )
        : allArticles;

    const articles = paginate(filtered, currentPage, pageSize);

    const articlesDisplayed = filtered.length;

    return (
      <>
        <NavTabs />
        <div className="container">
          <div className="jumbotron jumbotron-fluid" id="resource-jumbo">
            <div className="container" id="jumbo-height">
              <p id="resource-subhead">articles and community resources</p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <h4 id="search-title">Search Resources</h4>
              </div>

<<<<<<< HEAD
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <SearchForm
                search={this.state.searchTerm}
                update={this.handleSearchEvent.bind(this)}
                clear={this.handleClearSearch.bind(this)}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <Pagination
                itemsCount={articlesDisplayed}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                onNextPageChange={this.handleNextPageChange}
                onPreviousPageChange={this.handlePreviousPageChange}
              />
=======
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <SearchForm
                  search={this.state.searchTerm}
                  update={this.handleSearchEvent.bind(this)}
                  clear={this.handleClearSearch}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <Pagination
                  itemsCount={articlesDisplayed}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                  onNextPageChange={this.handleNextPageChange}
                  onPreviousPageChange={this.handlePreviousPageChange}
                />
              </div>
>>>>>>> 83cf48fc1ef3d5f482ec88beabb89ec020ead75d
            </div>
          </div>

          <div className="row mt-2">
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
                  <div className="card mb-5" id="resource-card">
                    <div className="card-header" id="resource-header">
                      <h4 id="resource-title">{article.title}</h4>
                    </div>
                    <div className="card-body" id="resources-card-body">
                      <h5 className="card-title" id="resource-author">
                        Author/Contributing Organization: {article.author}
                      </h5>
                      <p id="resource-description">
                        Description: {article.description}
                      </p>
                      <p>
                        <a
                          href={article.source}
                          className="btn btn"
                          target="_blank"
                          id="resource-link"
                        >
                          Source: {article.source}
                        </a>
                      </p>
                      <hr />

                      <div id="accordion">
                        <div className="card-title" id={article.id}>
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Expand for article content
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby={article.id}
                          data-parent="#accordion"
                        >
                          <div className="card-body">{article.body}</div>
                        </div>
                        <div className="text-right mr-2">
                          <small className="text-muted">
                            Posted {moment(article.date_added).from(moment())}{" "}
                            on{" "}
                            {moment(article.date_added).format("MMM D, YYYY")}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                onNextPageChange={this.handleNextPageChange}
                onPreviousPageChange={this.handlePreviousPageChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resources;
