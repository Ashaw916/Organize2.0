import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import interactionPlugin from "@fullcalendar/interaction"
// import { render } from "ejs";
// import $ from "jquery";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(eventClickInfo) {
    console.log("eventClickInfo", eventClickInfo);

    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  calendarComponentRef = React.createRef();

  render() {
    const { events } = this.props;
    console.log(this.props);
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
      />
    );
  }
}

export default Calendar;
