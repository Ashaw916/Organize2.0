const events = [
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

//EXPORT FUNCTIONS
export function getEvents() {
  return events;
}

export function getEvent(id) {
  return events.find((e) => e._id === id);
}

export function deleteEvent(id) {
  let eventInDb = events.find((e) => e._id === id);
  events.splice(events.indexOf(eventInDb), 1);
  return eventInDb;
}
