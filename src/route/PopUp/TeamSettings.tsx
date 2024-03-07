import { useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { settingTeam } from "./PopupState";
import { ChangeEvent, useState } from "react";

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
  min-height: 600px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
`;

const Details = styled.div`
  width: 90%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const InputDetails = styled.input`
  height: 30px;
  width: 80%;
  padding: 0 10px;
  border: 0;
  border-radius: 5px;
  background-color: #d9d9d9d9;
`;

const CheackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

const Check = styled.input`
  width: 16px;
  height: 16px;
  margin-left: auto;
`;

const ListContainer = styled.div`
  width: 90%;
  height: 150px;
  margin: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ListTitle = styled.div`
  margin-right: auto;
`;

const ListItem = styled.div`
  width: 100%;
  min-height: 40px;
  margin: 2px 0;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface BtnProps {
  middle?: boolean | null;
}
const Btn = styled.button<BtnProps>`
  width: auto;
  min-width: 60px;
  height: 30px;
  background-color: #d9d9d9;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 0 5px;
  ${({ middle }) =>
    middle &&
    css`
      opacity: 0.5; /* 투명도를 50%로 설정 */
      pointer-events: none; /* 클릭 불가능하도록 설정 */
    `}
`;

const Popup_Footer = styled.div`
  width: 90%;
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

function TeamSettings() {
  const setSettingsOpen = useSetRecoilState(settingTeam);
  const confirmSetting = () => {
    setSettingsOpen(false);
  };
  const closeSetting = () => {
    setSettingsOpen(false);
  };
  interface TeamSettings {
    name: string;
    explanation: string;
    isPublic: string;
  }
  const TeamSettings: TeamSettings = {
    name: "팀이름",
    explanation: "팀설명",
    isPublic: "public",
  };
  const userInfo = {
    name: "사용자",
    manager: false,
    middle: true,
  };
  const members = [
    {
      name: "김창휘",
      manager: true,
      middle: false,
    },
    {
      name: "중간관리자",
      manager: false,
      middle: true,
    },
    {
      name: "중간관리자",
      manager: false,
      middle: true,
    },
    {
      name: "중간관리자",
      manager: false,
      middle: true,
    },
    {
      name: "중간관리자",
      manager: false,
      middle: true,
    },
  ];
  const applicant = [
    {
      name: "한승연",
      email: "hanstom000608@gmail.com",
    },
  ];

  const [teamName, setTeamName] = useState(TeamSettings.name);
  const [explanation, setExplanation] = useState(TeamSettings.explanation);
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value); // input 값이 변경될 때마다 eventName 상태를 업데이트
  };
  const handleExpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExplanation(event.target.value); // input 값이 변경될 때마다 eventName 상태를 업데이트
  };
  const acceptApplicant = () => {};
  const regectApplicant = () => {};

  return (
    <Container>
      <Popup>
        <Details>
          팀 이름
          <InputDetails
            value={teamName}
            onChange={handleNameChange}
          ></InputDetails>
        </Details>
        <Details>
          설명
          <InputDetails
            value={explanation}
            onChange={handleExpChange}
          ></InputDetails>
        </Details>
        <Details>
          공개 범위
          <CheackContainer>
            <Check type={"radio"} name={"public"}></Check>
            공개
          </CheackContainer>
          <CheackContainer>
            <Check type={"radio"} name={"public"}></Check>
            승인 필요
          </CheackContainer>
          <CheackContainer>
            <Check type={"radio"} name={"public"}></Check>
            비공개
          </CheackContainer>
        </Details>
        <Details style={{ margin: "0px" }}>구성원 목록</Details>
        <ListContainer>
          {members.map((element) => (
            <ListItem>
              <p style={{ marginRight: "auto" }}>{element.name}</p>
              {!userInfo.middle && <Btn>관리자 위임</Btn>}
              {!userInfo.middle && (
                <Btn middle={element.middle}>중간관리자 임명</Btn>
              )}
              <Btn>내보내기</Btn>
            </ListItem>
          ))}
        </ListContainer>
        <Details style={{ margin: "0px" }}>신청자 목록</Details>
        <ListContainer>
          {applicant.map((element) => (
            <ListItem>
              <p style={{ marginRight: "5px" }}>{element.name}</p>
              <p style={{ fontSize: "14px" }}>{element.email}</p>
              <Btn style={{ marginLeft: "auto" }} onClick={acceptApplicant}>
                수락
              </Btn>
              <Btn onClick={regectApplicant}>거절</Btn>
            </ListItem>
          ))}
        </ListContainer>
        <Popup_Footer>
          <CancelBtn onClick={closeSetting}>취소</CancelBtn>
          <ConfirmBtn onClick={confirmSetting}>완료</ConfirmBtn>
        </Popup_Footer>
      </Popup>
    </Container>
  );
}

export default TeamSettings;
