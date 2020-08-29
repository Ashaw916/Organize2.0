const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/organize");

const eventSeed = [
  {
    title: "test title",
    start_date: "08/31/2020 12:00pm",
    end_date: "08/31/2020 9:00pm",
    date_added: new Date(Date.now()),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur diam enim, vel ultrices libero vulputate ac. Phasellus ornare erat non dolor luctus, sit amet varius sapien accumsan. Aliquam quis varius sem. Sed eros mauris, vehicula sit amet facilisis ut, scelerisque at diam. Donec ultricies mollis enim, sit amet convallis eros varius non. Fusce varius risus id ipsum placerat, euismod vehicula enim tempus. Nulla ullamcorper felis vel est accumsan pulvinar. Praesent malesuada, dolor vitae tincidunt egestas, nisl leo vulputate erat, id porttitor mi purus sit amet nunc. Nunc pharetra mi mi, id tristique arcu euismod ac. Suspendisse vitae eros felis. Cras at commodo ligula. ",
    location: "california state capitol",
    organization: "test organization",
    start_time: "3:00pm",
    event_url: "event test url"
  }
];

const articleSeed = [
  {
    title: "article test title",
    author: "article test author",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur diam enim, vel ultrices libero vulputate ac. Phasellus ornare erat non dolor luctus, sit amet varius sapien accumsan. Aliquam quis varius sem. Sed eros mauris, vehicula sit amet facilisis ut, scelerisque at diam. Donec ultricies mollis enim, sit amet convallis eros varius non. Fusce varius risus id ipsum placerat, euismod vehicula enim tempus. Nulla ullamcorper felis vel est accumsan pulvinar. Praesent malesuada, dolor vitae tincidunt egestas, nisl leo vulputate erat, id porttitor mi purus sit amet nunc. Nunc pharetra mi mi, id tristique arcu euismod ac. Suspendisse vitae eros felis. Cras at commodo ligula. ",
    date_added: new Date(Date.now()),
    description: "article test description",
    source: "article test source",
    type: "article test type"
  }
];

const linkSeed = [
  {
    title: "link test title",
    date_added: new Date(Date.now()),
    description: "link test description",
    url: "link test url",
    type: "link test type"
  }
];

db.Events.remove({})
  .then(() => db.Events.collection.insertMany(eventSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Articles.remove({})
  .then(() => db.Articles.collection.insertMany(articleSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Links.remove({})
  .then(() => db.Links.collection.insertMany(linkSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });  