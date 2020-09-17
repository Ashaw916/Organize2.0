import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import interactionPlugin from "@fullcalendar/interaction"
// import { render } from "ejs";
// import $ from "jquery";
class Calendar extends Component {
  // function Calendar(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     modal: false,
  //   };
  //   this.toggle = this.toggle.bind(this);
  // }
  // toggle(eventClickInfo) {
  //   console.log("eventClickInfo", eventClickInfo);

  //   this.setState((prevState) => ({
  //     modal: !prevState.modal,
  //   }));
  // }
  // function dateClick(event) {
  //   alert("Clicked on: " + event);
  //   alert("Current view: " + event);
  //   // change the day's background color just for fun
  //   event = "red";
  // }
  // dateClick(e) {
  //   alert(e.target.title);
  // }

  calendarComponentRef = React.createRef();

  render() {
    const { events, dateClick } = this.props;
    console.log("props", this.props);
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
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
        // onClick={dateClick}
      />
    );
  }
}

export default Calendar;
