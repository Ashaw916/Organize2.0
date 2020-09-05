import React from "react";
import FullCalendar, { isPropsEqual } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"

function Calendar(props) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            // dayMaxEventRows={true}
            // eventDidMount={}
            views= {{
                dayGrid: {
                    titleFormat: {year: "numeric", month: "2-digit", day:"2-digit"}
                }
                // timeGrid: {
                //     dayMaxEventRows: 3
                // }
            }}
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

function(info) {
    var tooltip = new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: "top",
        trigger: "hover",
        container: "body"
    })
}


              */