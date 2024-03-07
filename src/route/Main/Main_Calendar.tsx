import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { makeSchedule } from "../PopUp/PopupState";

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
  min-height: 200px;
  margin: 20px 60px 0 60px;
  padding: 20px 30px;
  background-color: #d9d9d9;
`;

const Task = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
interface CategoryColorProps {
  color: string;
}
const CategoryColor = styled.div<CategoryColorProps>`
  background-color: ${(props) => props.color};
  height: 90%;
  width: 8px;
  margin-right: 10px;
`;
const Check = styled.input`
  width: 16px;
  height: 16px;
  margin-left: auto;
`;
const Dday = styled.div`
  margin-left: auto;
`;

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

  const setScheduleOpen = useSetRecoilState(makeSchedule);
  const addSchedule = () => {
    //open makeSchedule popup
    setScheduleOpen(true);
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
        locale="kr"
        height={600}
        selectable={true}
        dateClick={(data) => loadCurrentSchedule(data)}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "addBtn",
        }}
        customButtons={{
          addBtn: {
            text: "+",
            click: addSchedule,
          },
        }}
        events={events}
      />
      <TaskContainer>
        <Task>
          <CategoryColor color={"#E3C1C1"} />
          일정 1<Check type={"checkbox"}></Check>
        </Task>
        <Task>
          <CategoryColor color={"tomato"} />
          일정 2<Dday>D-112</Dday>
        </Task>
      </TaskContainer>
    </Container>
  );
}

export default Main_Calendar;
