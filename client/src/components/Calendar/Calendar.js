import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction"
import { render } from "ejs";
import $ from "jquery";

class Calendar extends Component {
    calendarComponentRef = React.createRef();

    render() {
        const { events } = this.props;
        return (
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                views={{
                    month: {
                        type: "dayGridMonth",
                    },
                    week: {
                        type: "dayGridWeek"
                    },
                    day: {
                        type: "dayGridDay"
                    }
                }}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: ""
                }}
                events={events}

            />
        )
    }



};


export default Calendar;