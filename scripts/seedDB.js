const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const eventSeed = [
  {
    title: "Protest planning meeting",
    start_date: "09/30/2020 03:00pm",
    end_date: "09/30/2020 06:00pm",
    date_added: new Date(Date.now()),
    description: "Gathering to plan and coordinate protest logistics",
    location: "california state capitol",
    organization: "Lawyers United",
    start_time: "3:00pm",
    event_url: "https://www.google.com/",
  },
  {
    title: "City budget hearing",
    start_date: "09/22/2020 12:00pm",
    end_date: "09/22/2020 03:00pm",
    date_added: new Date(Date.now()),
    description:
      "City budget hearing, community members can speak to local impact",
    location: "City Hall: 915 I Street, Sacramento, CA 95814",
    organization: "Volunteers United",
    start_time: "12:00pm",
    event_url: "https://www.google.com/",
  },
  {
    title: "School Funding March",
    start_date: "09/28/2020 11:00am",
    end_date: "09/28/2020 02:00am",
    date_added: new Date(Date.now()),
    description: "Community March for more school funding",
    location: "California State Capitol: 1315 10th Street, ",
    organization: "Teachers United",
    start_time: "11:00am",
    event_url: "https://www.google.com/",
  },
];

const articleSeed = [
  {
    title: "World Pays Tribute to ChadWick Boseman",
    author: "Multiple",
    body: "Photos illustrating tribute to recently passed Icon",
    date_added: new Date(Date.now()),
    description: "Photos illustrating tribute to recently passed Icon",
    source:
      "https://www.usatoday.com/picture-gallery/news/2020/09/04/world-pays-tribute-chadwick-boseman/5712110002/",
    type: "News Article",
  },
  {
    title: "How to Prepare to attend a protest",
    author: "Volunteers United",
    body:
      "In order to prepare be sure to: get all relevant information. Park safely. Atttend with friends. Dress apropriately. Bring water.",
    date_added: new Date(Date.now()),
    description: "Overview on attending a protest",
    source: "Volunteers United",
    type: "Blog post",
  },
  {
    title: "Community Health Clinic",
    author: "N/A",
    body: "Local resource for community health",
    date_added: new Date(Date.now()),
    description: "Sacramento resource in community health",
    source: "https://onecommunityhealth.com/",
    type: "Community resource",
  },
  {
    title: "Checklist for planning a community protest",
    author: "Lawyers United",
    body:
      "In planning a peaceful protest there are many guidelines that are helpful to follow to plan impactful and productive community events that lead to positive change ....",
    date_added: new Date(Date.now()),
    description: "How-to article",
    source: "Lawyers United",
    type: "Blog",
  },
  {
    title:
      "Sacramento police chief calls out 'second-guessing' over his handling of latest protests",
    author: "Molly Sullivan",
    body:
      "After downtown endured another recent surge in demonstrations over the mistreatment of Blacks and other minorities at the hands of law enforcement, Sacramento Police Chief Daniel Hahn rebuked some local officials for “second-guessing” him in an op-ed published by The Sacramento Bee...",
    date_added: new Date(Date.now()),
    description: "Local law-enforcement article",
    source: "https://www.sacbee.com/news/local/crime/article245474115.html",
    type: "News Article",
  },
];

const linkSeed = [
  {
    _id: "0001",
    title: "Nightly news",
    date_added: new Date(Date.now()),
    description: "Nightly news September 1, 2020",
    src: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0002",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    src: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0003",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    src: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0004",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    src: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
  {
    _id: "0005",
    title: "Nightly news",
    description: "Nightly news September 1, 2020",
    src: "https://www.youtube.com/embed/JU9g16VIVM8",
    type: "Youtube video",
  },
];

//This seed is in the client/resources folder
const userProfile = [
  {
    _id: "0001",
    email: "doctorsUni@seedemail.com",
    password: "doctorspassword",
    organization: "Doctors United",
    role: "admin",
    website: "www.doctors.fakeweb.com",
    facebook: "http://facebook/doctorsunifake.com",
    instagram: "@doctorsunited.seed",
    twitter: "@doctorsunitedseed",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0002",
    email: "teachersUni@seedemail.com",
    password: "teacherspassword",
    organization: "Teachers United",
    role: "admin",
    website: "www.teachers.fakeweb.com",
    facebook: "http://facebook/teachersunifake.com",
    instagram: "@teachersunited.seed",
    twitter: "@teachersunitedseed",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0003",
    email: "lawyersUni@seedemail.com",
    password: "lawyerspassword",
    organization: "Lawyers United",
    role: "admin",
    website: "www.lawyers.fakeweb.com",
    facebook: "http://facebook/lawyersunifake.com",
    instagram: "@lawyersunited.seed",
    twitter: "@lawyersunitedseed",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0004",
    email: "volunteersUni@seedemail.com",
    password: "volunteerspassword",
    organization: "Volunteers United",
    role: "admin",
    website: "www.volunteers.fakeweb.com",
    facebook: "http://facebook/volunteersunifake.com",
    instagram: "@volunteersunited.seed",
    twitter: "@volunteersunitedseed",
    date_added: new Date(Date.now()),
  },
];

const user = [
  {
    _id: "0001",
    email: "doctorsUni@seedemail.com",
    password: "doctorspassword",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0002",
    email: "teachersUni@seedemail.com",
    password: "teacherspassword",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0003",
    email: "lawyersUni@seedemail.com",
    password: "lawyerspassword",
    date_added: new Date(Date.now()),
  },
  {
    _id: "0004",
    email: "volunteersUni@seedemail.com",
    password: "volunteerspassword",
    date_added: new Date(Date.now()),
  },
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

// db.UserProfiles.remove({})
//   .then(() => db.UserProfiles.collection.insertMany(userProfileSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// db.Users.remove({})
//   .then(() => db.Users.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
