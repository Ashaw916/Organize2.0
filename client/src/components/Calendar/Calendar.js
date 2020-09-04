import React from "react";
import FullCalendar, { isPropsEqual } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"

function Calendar(props) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            events={props.events}
        />
    )
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
*/