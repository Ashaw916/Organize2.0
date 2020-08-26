import axios from "axios";

export default {
  // Gets all events
  getevents: function () {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function (id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a event to the database
  saveEvent: function (eventData) {
    return axios.post("/api/events", eventData);
  },
};
