import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchApi } from "../../api";
import { useState } from "react";
import Main_header from "./Main_Header";
import Main_Calendar from "./Main_Calendar";
import Main_LeftPanel from "./Main_LeftPanel";
import Main_RightPanel from "./Main_RightPanel";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
//api 테스트
interface IApi {
  _links: {
    self: {
      href: string;
      templated: boolean;
    };
    logfile: {
      href: string;
      templated: boolean;
    };
  };
}

function Main() {
  //const { isLoading, data } = useQuery<IApi>("api", fetchApi);
  //console.log(data);

  return (
    <Container>
      <Main_header></Main_header>

      <MainContainer>
        <Main_LeftPanel></Main_LeftPanel>
        <Main_Calendar></Main_Calendar>
        <Main_RightPanel></Main_RightPanel>
      </MainContainer>
    </Container>
  );
}

export default Main;
