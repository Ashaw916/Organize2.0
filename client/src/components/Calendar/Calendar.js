import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction"
import { render } from "ejs";
import $ from "jquery";

class Calendar extends Component {
    calendarComponentRef = React.createRef();

    render() {
        const { events } = this.props;
        return (
            <FullCalendar
                plugins={[ dayGridPlugin, "bootstrapPlugin", interactionPlugin ]}
                themeSystem={"bootstrap"}
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
                eventRender={(info) => {
                    const title = info.event.title;
                    console.log(title);
                    console.log(description);
                    const description = info.event.description;
                    $(info.el).popover({
                        title: title,
                        content: description,
                        trigger: 'click',
                        placement: 'top',
                        container: 'body'
                    }).popover("show");
                }}

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

            // ref={this.calendarComponentRef}


*/