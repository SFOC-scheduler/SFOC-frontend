import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { settingTeam } from "./PopupState";

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
  height: 50px;
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
  height: 100px;
  margin: 10px;
  padding: 0 10px;
`;

const ListItem = styled.div``;

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
  const members = [
    {
      name: "김창휘",
      manager: true,
      middle: false,
    },
  ];
  const applicant = [
    {
      name: "전현민",
      email: "hhh",
    },
  ];
  return (
    <Container>
      <Popup>
        <Details>
          팀 이름
          <InputDetails></InputDetails>
        </Details>
        <Details>
          설명
          <InputDetails></InputDetails>
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
        <ListContainer>
          구성원 목록
          {members.map((element) => (
            <ListItem>{element.name}</ListItem>
          ))}
        </ListContainer>
        <ListContainer>신청자 목록</ListContainer>
        <Popup_Footer>
          <CancelBtn>취소</CancelBtn>
          <ConfirmBtn onClick={confirmSetting}>완료</ConfirmBtn>
        </Popup_Footer>
      </Popup>
    </Container>
  );
}

export default TeamSettings;
