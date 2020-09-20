# Organize2.0

![GitHub last commit](https://img.shields.io/github/last-commit/Ashaw916/Organize2.0) ![npm version](https://badge.fury.io/js/inquirer.svg)

A centralized hub for social movement organizations to share information with their local community, and for the general public to easily obtain this information.

## Table of Contents

* [Demo](#demo)
* [Overview](#overview)
* [Public Usage](#public-usage)
    - [Home Page](#home-page)
    - [Events Page](#events-page)
    - [Resources Page](#resources-page)
    - [Donate Page](#donate-page)
    - [Video Page](#video-page)
    - [Contact Page](#contact-page)
    - [Login/Register](#loginregister)
* [Private Usage](#private-usage)
    - [Manage Page](#manage-page)
    - [Profile Page](#profile-page)
    - [Logout](#logout)
* [Tech and Methods Breakdown](#tech-and-methods-breakdown)
    - [Technology](#technology)
    - [Front-End](#front-end)
    - [Back-End](#back-end)
* [Contributors](#contributors)
* [Launch](#launch)
* [Future Development](#future-development)
* [Join Our Team!](#join-our-team-!)

### Demo

For a [video demo](https://youtu.be/5j6DQmioua4) of project. Skip to [7:00 mark for the demo of the webpage](https://youtu.be/5j6DQmioua4?t=420).

For the [finished web page](https://organize-demo.herokuapp.com/)

### Overview

Grassroots hub for community organizers and by community organizers which allows posting important information like events, livestream video, donation resources and more. Participating organizations are by invite-only and must be referred by other members. Content is viewable by the general public, but cannot be commented-on, hacked, or trolled, creating a centralized location for community-building without the negative static of social media and misinformation.

The application is made up of nine pages:
1. Home
2. Events
3. Resources
4. Donate
5. Video
6. Contact
7. Login/Register
8. Manage
9. Profile
10. Logout

### Public Usage

At any time the navbar may be used to navigate to another page.

##### Home Page

A user may navigate using the navbar or the four square btns under the header (named `Community Resources`, `Donate`,  `Video Links`, `Connect`).

The calendar displays all events, clicking on one will prompt a pop-up showing more information. All events can also be viewed from the `Events` page, it can be navigated to from the navbar.

##### Events Page

All events may be viewed here, with the following information: name of event, start date, time, location, posted by. The search bar can be used to search by event name and location. Use the pagination to view more events.

##### Resources Page



##### Donate Page

##### Video Page

##### Contact Page

##### Login/Register

### Private Usage

##### Manage Page

##### Profile Page

##### Logout

### Tech and Methods Breakdown

##### Technology

* VS Code
* Node
* MongoDB Atlas
* Mongoose
* Reactjs
* React-router-dom
* Bootstrap
* font-awesome
* moment
* MVC Pattern
* fullcalendar
* Express
* axios
* passport
* bcryptjs
* JSON web tokens
* body-parser
* connect-flash
* cookie-parse
* cookie-parser
* cors
* dotenv
* ejs
* if-env
* lodash
* Adobe InDesign
* shields.io

##### Front-End

Reactjs was used to create the front end. State was used to hold information from api calls to the back-end and functional components were used to increase the code efficiency. 

FullCalendar.io calendar component was used to display events from the database to the user.

A combination of Bootstrap as the backbone html, font awesome and original CSS managed the styling of the app. Adobe InDesign was used to create visual template for the entire site, including the color palette.

Two pages are privatized using an original private route function in the App.js, and JSON web tokens.

##### Back-End

Five REST APIs were created to facilitate a pathway between the client and the database.




### Contributors

* Sandra Arredondo
* Vanessa Bautista
* Saular Moaddeli
* Aaron Young
* Stephen Mayfield

### Launch

Date [application](https://organize-demo.herokuapp.com/) releases: `September 20th, 2020`

### Future Development

* Automated email sent to invitees
* Internal email/instant-messaging functionality to participating organizations through the application
* Ability for users to post photos
* Livestream video hosting within the app (not just embedded)
* Optomized progressive web application version

### Join Our Team!

If you are interested in joining this project, you can contact Aaron Young!
