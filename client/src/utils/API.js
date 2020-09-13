import axios from "axios";

export default {
  // Gets all events
  getEvents: function () {
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
  // Saves an event to the database
  saveEvent: function (eventData) {
    return axios.post("/api/events", eventData);
  },
  // Updates an event
  updateEvent: function (id, eventData) {
    return axios.put("/api/events/" + id, eventData);
  },

  // Gets all articles
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Updates an article
  updateArticle: function (id, articleData) {
    return axios.put("/api/articles/" + id, articleData);
  },

  // Gets all links
  getLinks: function () {
    return axios.get("/api/links");
  },
  // Gets the link with the given id
  getLink: function (id) {
    return axios.get("/api/links/" + id);
  },
  // Deletes the link with the given id
  deleteLink: function (id) {
    return axios.delete("/api/links/" + id);
  },
  // Saves a link to the database
  saveLink: function (linkData) {
    return axios.post("/api/links", linkData);
  },
  // Updates a link
  updateLink: function (id, linkData) {
    return axios.put("/api/links/" + id, linkData);
  },

  // Gets all videos
  getVideos: function () {
    return axios.get("/api/videos");
  },
  // Gets the video with the given id
  getVideo: function (id) {
    return axios.get("/api/videos/" + id);
  },
  // Deletes the video with the given id
  deleteVideo: function (id) {
    return axios.delete("/api/videos/" + id);
  },
  // Saves a video to the database
  saveVideo: function (videoData) {
    return axios.post("/api/videos", videoData);
  },
  // Updates a video
  updateVideo: function (id, videoData) {
    return axios.put("/api/videos/" + id, videoData);
  },

  //get all userProfiles
  getProfiles: function () {
    return axios.get("/users/profile");
  },

  auth: function (token) {
    return axios.post("/api/auth", (token) => {
      console.log(token);
    });
  },

};