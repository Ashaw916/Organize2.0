import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"

export default class Calendar extends Component {
    render() {
        return (
            <FullCalendar 
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev, next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
            />
        )
    }
};
