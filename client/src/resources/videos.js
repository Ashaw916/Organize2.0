const videos = [
  {
    _id: "0001",
    title: "Nightly news",
    date_added: new Date(Date.now()),
    description: "Nightly news September 1, 2020",
    url: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0002",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    url: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0003",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    url: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0004",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    url: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0005",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    url: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
];

//EXPORT FUNCTIONS
export function getVideos() {
  return videos;
}

export function getVideo(id) {
  return videos.find((v) => v._id === id);
}

export function deleteVideo(id) {
  let videoInDb = videos.find((v) => v._id === id);
  videos.splice(videos.indexOf(videoInDb), 1);
  return videoInDb;
}
