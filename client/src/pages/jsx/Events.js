import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import Pagination from "../../components/Pagination/Pagination";
import { paginate } from "../../utils/paginate";
import { searchParams } from "../../utils/search";
import API from "../../utils/API";
import "../css/Events.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import { render } from "ejs";

class Events extends Component {
  state = {
    events: [],
    pageSize: 8,
    currentPage: 1,
    searchTerm: "",
    searchResults: [],
  };

  componentDidMount() {
    API.getEvents().then((res) => {
      const events = res.data;
      this.setState({ events });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearchEvent(event) {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value, currentPage: 1 });
  }

  handleClearSearch(event) {
    event.preventDefault();
    this.setState({ searchTerm: "", currentPage: 1 });
  }

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
      const totalPages = Math.ceil(state.events.length / state.pageSize);
      console.log(totalPages);
      if (state.currentPage >= totalPages) {
        return { currentPage: totalPages };
      }
      return { currentPage: state.currentPage + 1 };
    });
  };

  render() {
    const { events: allEvents, currentPage, pageSize, searchTerm } = this.state;

    const filtered =
      searchTerm !== ""
        ? allEvents.filter(
            (event) =>
              event.title.includes(searchTerm) ||
              event.organization.includes(searchTerm) ||
              event.location.includes(searchTerm) ||
              event.title.toLowerCase().includes(searchTerm) ||
              event.organization.toLowerCase().includes(searchTerm) ||
              event.location.toLowerCase().includes(searchTerm)
          )
        : allEvents;

    const events = paginate(filtered, currentPage, pageSize);

    function splitDate(str) {
      return str.slice(5, 10);
    }

    function splitYear(str) {
      return str.slice(0, 4);
    }

    const eventsDisplayed = filtered.length;
    return (
      <>
        <NavTabs />
        <div className="container">
          <div className="container" id="event-searchbar">
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                id="search-title-wrapper"
              >
                <h4 id="search-title">Search Events</h4>
                {/* <FilterDropdown data={events} /> */}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <SearchForm
                  search={this.state.searchTerm}
                  update={this.handleSearchEvent.bind(this)}
                  clear={this.handleClearSearch.bind(this)}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <Pagination
                  itemsCount={eventsDisplayed}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                  onNextPageChange={this.handleNextPageChange}
                  onPreviousPageChange={this.handlePreviousPageChange}
                />
              </div>
            </div>
          </div>

          <div className="container-events" id="events-wrapper">
            {events.map((event) => (
              <div
                className="card col-xs-6 col-sm-6 col-md-3 col-lg-3"
                id="event-cards-wrapper"
                key={event._id}
              >
                <div className="card-body" id="event-card">
                  <h6 id="event-card-title">{event.title}</h6>
                  <p className="event-card-ptag">
                    START DATE:{" "}
                    <span className="event-spantag">
                      {splitDate(event.start_date)}-
                      {splitYear(event.start_date)}
                    </span>
                  </p>
                  <p className="event-card-ptag">
                    TIME:{" "}
                    <span className="event-spantag">{event.start_time}</span>
                  </p>
                  <p className="event-card-ptag">
                    LOCATION:{" "}
                    <span className="event-spantag">{event.location}</span>
                  </p>
                  <p className="event-card-ptag">
                    POSTED BY:{" "}
                    <span className="event-spantag">{event.organization}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Events;
