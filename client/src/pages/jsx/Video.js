import React, { Component } from "react";
import API from "../../utils/API";
import VideoLiveStream from "../../components/VideoLiveStream/VideoLiveStream";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import { paginate } from "../../utils/paginate";
import moment from "moment";
import "../css/Video.css";
import NavTabs from "../../components/NavTabs/NavTabs";

class Video extends Component {
  state = {
    videos: [],
    pageSize: 3,
    currentPage: 1,
    searchTerm: "",
    searchResults: [],
  };

  componentDidMount() {
    API.getVideos().then((res) => {
      const videos = res.data;
      this.setState({ videos });
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
      const totalPages = Math.ceil(state.videos.length / state.pageSize);
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

  // function splitDate(str) {
  //   return str.slice(5, 10);
  // }

  // function splitYear(str) {
  //   return str.slice(0, 4);
  // }

  render() {
    const { videos: allVideos, currentPage, pageSize, searchTerm } = this.state;

    const filtered =
      searchTerm !== ""
        ? allVideos.filter(
            (video) =>
              video.title.includes(searchTerm) ||
              video.description.includes(searchTerm) ||
              video.title.toLowerCase().includes(searchTerm) ||
              video.description.toLowerCase().includes(searchTerm)
          )
        : allVideos;

    const videos = paginate(filtered, currentPage, pageSize);

    return (
      <>
        <NavTabs />
        <div className="container">
          <VideoLiveStream />
        </div>

        <div className="album py-5 bg-light" id="videoMain-wrapper">
          <div className="container">
            <div className="row">
              <div className="ml-4 mb-2">
                <SearchForm
                  search={this.state.searchTerm}
                  update={this.handleSearchEvent.bind(this)}
                  clear={this.handleClearSearch}
                />
              </div>
              <div className="">
                <Pagination
                  itemsCount={filtered.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                  onNextPageChange={this.handleNextPageChange}
                  onPreviousPageChange={this.handlePreviousPageChange}
                />
              </div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              {videos.map((video) => (
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow" key={video._id}>
                    <iframe
                      className="card-img-top"
                      style={{ height: "300px", width: "auto" }}
                      src={video.src}
                      allowFullScreen
                    ></iframe>
                    <div className="card-body">
                      <h5>Videos Archive</h5>
                      <p className="card-text">{video.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a href={video.src} target="_blank">
                            <button type="button" className="btn btn-sm">
                              Source
                            </button>
                          </a>
                        </div>
                        <small className="text-muted">
                          Added {moment(video.date_added).format("MMM D, YYYY")}
                        </small>
                      </div>
                      <small className="text-muted">
                        {/* {this.splitDate(video.date_added)}-
                        {this.splitYear(video.date_added)} */}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10 mx-5 float-right">
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
        </div>
      </>
    );
  }
}

export default Video;
