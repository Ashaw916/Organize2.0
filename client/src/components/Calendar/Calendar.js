import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import interactionPlugin from "@fullcalendar/interaction"
// import { render } from "ejs";

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
            start: moment(info.event._instance.range.start).format(
              "MMMM D, YYYY, h:mm a"
            ),
            end: moment(info.event._instance.range.end).format(
              "MMMM D, YYYY, h:mm a"
            ),
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
