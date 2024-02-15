import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchApi } from "../../api";
import { useState } from "react";

import home_icon from "../../resources/Icon/home_icon.png";
import alarm_icon from "../../resources/Icon/alarm_icon.png";
import openDown_icon from "../../resources/Icon/moveDown_icon.png";
import settings_icon from "../../resources/Icon/settings_icon.png";
import { Link } from "react-router-dom";
import Alarm from "../PopUp/Alarm";
import TeamList from "../PopUp/TeamList";

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px;
`;

interface BtnProps {
  imgSrc: string;
}

const HomeBtn = styled.button<BtnProps>`
  width: 36px;
  height: 36px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border: 0px;
  background-color: transparent;
`;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
  height: 44px;
  margin: 0 50px;
  margin-right: auto;
`;

const AlarmBtn = styled.div<BtnProps>`
  width: 44px;
  height: 44px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border: 0px;
  background-color: transparent;
`;

const OpenBtn = styled.button<BtnProps>`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border: 0px;
  background-color: transparent;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const CurrentPageContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80px;
  height: 48px;
  border: 3px solid black;
  border-radius: 30px;
  background-color: transparent;
  padding: 0 4px;
  margin-right: 40px;
`;

const UserImg = styled.image`
  width: 38px;
  height: 38px;
  border: 2px solid black;
  border-radius: 50px;
`;

const SettingsBtn = styled.button<BtnProps>`
  width: 38px;
  height: 38px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border: 0px;
  background-color: transparent;
`;

function Main_header() {
  const [isAlarmOpen, setAlarmOpen] = useState(false);
  const [isTeamOpen, setTeamOpen] = useState(false);

  const toggleAlarm = () => {
    setAlarmOpen(!isAlarmOpen);
  };
  const toggleTeam = () => {
    setTeamOpen(!isTeamOpen);
  };

  return (
    <Header>
      <Link to="/">
        <HomeBtn imgSrc={home_icon}></HomeBtn>
      </Link>
      <AlarmContainer>
        {isAlarmOpen && <Alarm />}
        <AlarmBtn imgSrc={alarm_icon}></AlarmBtn>
        <OpenBtn imgSrc={openDown_icon} onClick={toggleAlarm}></OpenBtn>
      </AlarmContainer>
      <CurrentPageContainer>
        {isTeamOpen && <TeamList />}
        my page
        <OpenBtn imgSrc={openDown_icon} onClick={toggleTeam}></OpenBtn>
      </CurrentPageContainer>
      <UserContainer>
        <UserImg></UserImg>
        <OpenBtn imgSrc={openDown_icon}></OpenBtn>
      </UserContainer>
      <SettingsBtn imgSrc={settings_icon}></SettingsBtn>
    </Header>
  );
}

export default Main_header;
