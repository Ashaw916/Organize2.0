import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import interactionPlugin from "@fullcalendar/interaction"
// import { render } from "ejs";
// import $ from "jquery";

class Calendar extends Component {
  calendarComponentRef = React.createRef();

  render() {
    const { events } = this.props;
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        views={{
          month: {
            type: "dayGridMonth",
          },
          week: {
            type: "dayGridWeek",
          },
          day: {
            type: "dayGridDay",
          },
        }}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today",
        }}
        events={events}
        eventClick={function (info) {
          info.jsEvent.preventDefault();

          var myObject = {
            title: info.event._def.title,
            start: info.event._instance.range.start,
            end: info.event._instance.range.end,
            description: info.event._def.extendedProps.description,
            location: info.event._def.extendedProps.location,
            organization: info.event._def.groupId,
          };
          var resultingString = "";
          for (var property of Object.getOwnPropertyNames(myObject)) {
            resultingString += `${property}: ${myObject[property]}\n`;
          }
          alert(resultingString);
        }}
      />
    );
  }
}

export default Calendar;
