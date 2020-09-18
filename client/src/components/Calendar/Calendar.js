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
        // eventClick={function (info) {
        //   info.jsEvent.preventDefault();
        //   console.log(info);
        //   let eventAlert = "";
        //   let title = info.event._def.title;
        //   let start = info.event._instance.range.start;
        //   for (const [title, start, end, desc, loc, org, url] of Object.entries(
        //     {
        //       hello: "🌎",
        //       wassup: "👀✨😍🔥",
        //     }
        //   )) {
        //     eventAlert += `${title}: ${start}\n`;
        //   }
        //   alert(eventAlert);
        //   alert(eventAlert.JSON.stringify());
        // }}
        //     eventClick: function(info) {
        //   info.jsEvent.preventDefault(); // don't let the browser navigate

        //   if (info.event.url) {
        //     window.open(info.event.url);
        //   }
        // }
      />
    );
  }
}

export default Calendar;
