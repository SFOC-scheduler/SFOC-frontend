import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { makeSchedule } from "./PopupState";

const Container = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.3s ease;
`;

const Popup = styled.div`
  position: absolute;
  background-color: white;
  width: 550px;
  height: 500px;
  padding: 40px;
  padding-right: 60px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 0;
  background-color: gray;
  margin: 0 10px;
`;

const Popup_Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const Title = styled.input`
  width: calc(100% - 40px);
  height: 40px;
`;

const Popup_Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Details = styled.div`
  width: 90%;
  height: 50px;
  margin: 10px 10px 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid gray;
`;

const DateBtn = styled.button`
  width: 120px;
  height: 30px;
  margin-left: auto;
  margin-right: 10px;
`;

const SetDatePopup = styled.div`
  width: 120px;
  height: 30px;
  margin-left: auto;
  margin-right: 10px;
`;

const TimeBtn = styled.button`
  width: 100px;
  height: 30px;
`;

const SetTimePopup = styled.button`
  width: 100px;
  height: 30px;
`;

const Check = styled.input`
  width: 16px;
  height: 16px;
  margin-left: auto;
`;

const Popup_Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: auto;
`;

const CancelBtn = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background-color: #d9d9d9;
  margin: 10px 20px 0 0;
`;

const ConfirmBtn = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background-color: #d9d9d9;
  margin: 10px 20px 0 0;
`;

function MakeSchedule() {
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [isAllDay, setIsAllDay] = useState(false);
  const [isDday, setIsDday] = useState(false);

  const formattedStartDate = `${startDate.getFullYear()}-${(
    startDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${startDate.getDate().toString().padStart(2, "0")}`;
  const formattedStartTime = `${startTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${startTime.getMinutes().toString().padStart(2, "0")}`;
  const formattedEndDate = `${endDate.getFullYear()}-${(endDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${endDate.getDate().toString().padStart(2, "0")}`;
  const formattedEndTime = `${endTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${endTime.getMinutes().toString().padStart(2, "0")}`;

  const setScheduleOpen = useSetRecoilState(makeSchedule);
  const confirmSchedule = () => {
    //use state에 저장된 정보들을 저장함
    console.log(
      eventName,
      startDate,
      startTime,
      endDate,
      endTime,
      isAllDay,
      isDday
    );
    setScheduleOpen(false);
  };

  const closeSchedule = () => {
    setScheduleOpen(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value); // input 값이 변경될 때마다 eventName 상태를 업데이트
  };
  const handleAllDayInput = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAllDay(event.target.checked); // input 값이 변경될 때마다 eventName 상태를 업데이트
  };
  const handleDdayInput = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDday(event.target.checked); // input 값이 변경될 때마다 eventName 상태를 업데이트
  };

  return (
    <Container>
      <Popup>
        <Popup_Header>
          <Icon></Icon>
          <Title
            placeholder={"일정 제목을 입력하세요"}
            value={eventName}
            onChange={handleInputChange}
          ></Title>
        </Popup_Header>
        <Popup_Main>
          <Details>
            시작
            <SetDatePopup>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                customInput={<DateBtn>{formattedStartDate}</DateBtn>}
              />
            </SetDatePopup>
            <DatePicker
              customInput={<TimeBtn>{formattedStartTime}</TimeBtn>}
              selected={startTime}
              onChange={(time: Date) => setStartTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={10}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />{" "}
          </Details>
          <Details>
            종료
            <SetDatePopup>
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                customInput={<DateBtn>{formattedEndDate}</DateBtn>}
              />
            </SetDatePopup>
            <DatePicker
              customInput={<TimeBtn>{formattedEndTime}</TimeBtn>}
              selected={startTime}
              onChange={(time: Date) => setEndTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={10}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />{" "}
          </Details>
          <Details>
            하루종일
            <Check type={"checkbox"} onChange={handleAllDayInput}></Check>
            {/* 토글 버튼 구현 */}
          </Details>
          <Details>
            D-day
            <Check type={"checkbox"} onChange={handleDdayInput}></Check>
          </Details>
        </Popup_Main>
        <Popup_Footer>
          <CancelBtn onClick={closeSchedule}>취소</CancelBtn>
          <ConfirmBtn onClick={confirmSchedule}>저장</ConfirmBtn>
        </Popup_Footer>
      </Popup>
    </Container>
  );
}

export default MakeSchedule;
