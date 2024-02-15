import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  width: 80%;
`;

function Main_Calendar() {
  return (
    <Container>
      <FullCalendar
        height={600}
        locale="kr"
        dateClick={function (data) {
          alert(data.dateStr + " day has been clicked!");
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev next",
          right: "title",
        }}
        buttonIcons={{
          prev: "chevron-left",
          next: "chevron-right",
        }}
      />
    </Container>
  );
}

export default Main_Calendar;
