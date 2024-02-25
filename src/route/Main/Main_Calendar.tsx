import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px 50px 0 50px;
  width: 80%;
  height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; //높이 남은부분으로 설정
  margin: 20px 60px 0 60px;
  min-height: 200px;
  background-color: #d9d9d9;
`;

const Task = styled.div``;

//https://fullcalendar.io/docs#toc
function Main_Calendar() {
  const [events, setEvents] = useState([
    {
      id: "2024-02-09",
      title: "설날 연휴",
      start: "2024-02-09",
      end: "2024-02-13",
      allDay: true,
    },
    {
      id: "2024-02-09",
      title: "설날 연휴",
      start: "2024-02-10",
      end: "2024-02-11",
      allDay: true,
    },
  ]);

  const makeSchedule = () => {
    alert("Clicked the custom button!");
  };

  function getEventsByDate(date: String) {
    console.log(date);
    console.log(events.filter((event) => event.start === date));
    return events.filter((event) => event.start === date.toString());
  }

  const loadCurrentSchedule = (data: DateClickArg) => {
    console.log(data.dateStr);
  };

  return (
    <Container>
      <FullCalendar
        height={600}
        locale="kr"
        selectable={true}
        dateClick={(data) => loadCurrentSchedule(data)}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev next",
          center: "title",
          right: "addBtn",
        }}
        customButtons={{
          addBtn: {
            text: "+",
            click: makeSchedule,
          },
        }}
        events={events}
      />
      <TaskContainer>
        <Task></Task>
      </TaskContainer>
    </Container>
  );
}

export default Main_Calendar;
