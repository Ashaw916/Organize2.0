import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import { render } from "ejs";
import $ from "jquery";

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
                        type: "dayGridWeek"
                    },
                    day: {
                        type: "dayGridDay"
                    }
                }}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                events={events}
            // ref={this.calendarComponentRef}

            />
        )
    }



};


export default Calendar;

/*
//maybe i don't have the right plugins /imported??
eventRender: function(info) {
    var tooltip = new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: "top",
        trigger: "hover",
        container: "body"
    })
}

///////////////////////////////////wishlist////////////////////////

/////////////////////////on viewport change, the view changes to dayGridDay///////////////////
// windowResize={this.handleWindowResize}

// handleWindowResize = () => {
    //     if (window.screen.width < 320) {
    //         this.calendarComponentRef.current
    //             .getApi()
    //             .changeView("dayGridDay")
    //     }
    //     else {
    //         this.calendarComponentRef.current.getApi("dayGridMonth");
    //     }
    // }


// (info) => {
//     new Tooltip(info.el, {
//         title: info.event.extendedProps.description,
//         placement: "top",
//         trigger: "hover",
//         container: "body"
//     })
*/