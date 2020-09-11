import React, { Component } from "react";
import { paginate } from "../../utils/paginate";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API";

class Donate extends Component {
  state = {
    links: [],
    pageSize: 3,
    currentPage: 1,
  };

  componentDidMount() {
    API.getLinks().then((res) => {
      const links = res.data;
      this.setState({ links });
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
      const totalPages = Math.ceil(state.links.length / state.pageSize);
      console.log(totalPages);
      if (state.currentPage >= totalPages) {
        return { currentPage: totalPages };
      }
      return { currentPage: state.currentPage + 1 };
    });
  };

  render() {
    const { length: count } = this.state.links;
    const { links: allLinks, currentPage, pageSize } = this.state;

    const links = paginate(allLinks, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <h1>Donate</h1>
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
          {links.map((link) => (
            <div className="col-12" key={link._id}>
              <div className="card mb-5">
                <div className="card-header">
                  <h4>Title: {link.title}</h4>
                </div>
                <div className="card-body">
                  <a href={link.src} className="btn btn-primary">
                    source: {link.src}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Donate;
