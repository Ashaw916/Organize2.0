import React from "react";
import FullCalendar, { isPropsEqual, Component } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import { render } from "ejs";

class Calendar extends Component {
    calendarComponentRef = React.createRef();

    render() {
        const { events } = this.props;
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                // dayMaxEventRows={true}
                // eventDidMount={}
                // views= {{
                //     month: {
                //         type: "dayGridMonth"
                //     }
                // }}
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
                    left: "prev,next",
                    center: "title",
                    right: "today"
                }}
                footerToolbar={{
                    center: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                // windowResize={this.handleWindowResize}
                events={events}
                // ref={this.calendarComponentRef}
                
            />
        )
    }

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

};

export default Calendar;

/*
[{
                groupId: "blm",
                start: "2020-08-29",
                title: "sandra event",
                url: "www.google.com",
                description: "work dammit",
                extendedProps: {
                  location: "Sacramento"
                }
              }]

function(info) {
    var tooltip = new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: "top",
        trigger: "hover",
        container: "body"
    })
}




              */