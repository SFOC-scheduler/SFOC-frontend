import { useState } from "react";
import styled from "styled-components";

const AlarmBubble = styled.div`
  position: absolute;
  z-index: 20;
  top: 90px;
  left: 120px;
  width: 400px;
  background: #d9d9d9;
  border-radius: 15px;
  padding: 8px 10px;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 10%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #d9d9d9;
  }
`;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  padding: 2px 8px;
  margin: 5px 0;
  & p {
    font-size: 15px;
  }
`;

const DeleteBtn = styled.button`
  border: 0;
  background-color: transparent;
  color: gray;
`;

function Alarm() {
  const [alarms, setAlarms] = useState([
    { id: 1, team: "xxx팀", user: "ooo님" },
    { id: 2, team: "yyy팀", user: "ppp님" },
    { id: 3, team: "ooo팀", user: "xxx님" },
  ]);

  const handleDelete = (id: number) => {
    // 삭제 버튼을 누른 알람을 제외한 나머지 알람들을 유지하도록 새로운 배열을 만듭니다.
    const updatedAlarms = alarms.filter((alarm) => alarm.id !== id);
    setAlarms(updatedAlarms);
  };
  return (
    <div>
      {alarms.length === 0 ? (
        <AlarmBubble style={{ textAlign: "center" }}>
          알람이 없습니다.
        </AlarmBubble>
      ) : (
        <AlarmBubble>
          {alarms.map((alarm) => (
            <AlarmContainer key={alarm.id}>
              <p>{`${alarm.team}에서 ${alarm.user}이(가) 알림을 추가했습니다`}</p>
              <DeleteBtn onClick={() => handleDelete(alarm.id)}>
                지우기
              </DeleteBtn>
            </AlarmContainer>
          ))}
        </AlarmBubble>
      )}
    </div>
  );
}

export default Alarm;
