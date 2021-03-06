# Organize2.0

![GitHub last commit](https://img.shields.io/github/last-commit/Ashaw916/Organize2.0) ![npm version](https://badge.fury.io/js/inquirer.svg)

A centralized hub for social movement organizations to share information with their local community, and for the general public to easily obtain this information.

## Table of Contents

* [Demo](#demo)
* [Launch](#launch)
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
    - [Periphery Contributor Guidelines](#periphery-contributor-guidelines)
* [Future Development](#future-development)
* [Join Our Team!](#join-our-team-!)

### Demo

For a [video demo](https://youtu.be/5j6DQmioua4) of project. Skip to [7:00 mark for the demo of the webpage](https://youtu.be/5j6DQmioua4?t=420).

For the [finished web page](https://organize-demo.herokuapp.com/)

### Launch

Date [application](https://organize-demo.herokuapp.com/) releases: 
Debut: `September 20th, 2020`

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

All resources (e.g. articles) may be viewed here, click on `Expand for aticle content` to see more information about each article. Use the search bar to look for specific articles and pagination to view more articles.

##### Donate Page

Links to donation pages can be found here, click on one button under `Donate Here` and it will open in a new tab. Use the search bar to look for specific links and pagination to view more.

##### Video Page

Video archive for past livestreams or videos, the most recently posted video will be shown at the top. This page also has a search bar and pagination.

##### Contact Page

Contact information for all participating organizations. The following information will be shown: name of organization, email, website, facebook, instagram and twitter.

##### Login/Register

Only invited users can have accounts and have the ability to post content to the website. If you were invited, use the `Register` form to register as an administrator. If you are an existing administrator, use the `Login` form.

### Private Usage

##### Manage Page

As an administrator, use the manage page to post new content to the public side. Here all posted content can be viewed as well, seperated by category, `Events`, `Articles and Resources`, `Donation Resources`, and `Videos`. 

All posts are able to be deleted or updated, clicking on edit will pre-populate the associated form where the information can be changed, click on the `Update` submission button to submit changes. Clicking on the delete button next to a post will immediately delete it.

##### Profile Page

Here administrators can view the social media information they have on file, at this time they cannot be updated or changed.

Here the form to invite another organization to the website can be found, in form we require three things: the email of the organization you would like to invite, the name of the organization and your email.

##### Logout

To logout, travel to the navbar at the top of the website and click `Logout`. A goodbye message will appear to signify this successful action.

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

Passport, bcryptjs, and json web tokens all work togehter to provide authentication and privatization for protected routes (Manage and Profile page).

Nine models, created using Mongoose, make up the database.

### Contributors

##### Core (Founder) Contributors

* Sandra Arredondo
* Vanessa Bautista
* Saular Moaddeli
* Aaron Young
* Stephen Mayfield

##### Periphery Contributors

No one yet!

#### Periphery Contributor Guidelines

New contributors MUST follow the below rules:

* ONLY use JavaScript
* The secrets to the database will NOT be shared, you will need to modify the server.js to work from your own database (local or MongoDB Atlas)
* As you will need to modify the server.js, ONLY commit and push files that solve the issue you are solving, DO NOT commit and push the server.js

### Future Development

* Automated email sent to invitees
* Internal email/instant-messaging functionality to participating organizations through the application
* Ability for users to post photos
* Livestream video hosting within the app (not just embedded)
* Optomized progressive web application version

### Join Our Team!

If you are interested in joining this project, you can contact @Ashaw916

Keep in mind, if you would like to join our team as a contributor, you will need to follow the rules outlined under `Periphery Contributor Guidelines`.

