import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchApi } from "../api";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  background-color: rgb(236, 236, 237);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: gray;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const MainArea = styled.div``;

const Calendar = styled.div``;

const LeftPanel = styled.div`
  width: 380px;
  height: 100%;
  padding: 30px;
  border-right: 1px solid black;
`;

const RightPanel = styled.div`
  width: 380px;
  height: 100%;
  margin-left: auto;
  padding: 30px;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  width: 340px;
  height: 35px;
  padding: 0 10px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  & button {
  }
  & span {
    font-size: 18px;
    text-align: start;
  }
`;

const TaskContainer = styled.div``;

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
  const { isLoading, data } = useQuery<IApi>("api", fetchApi);
  console.log(data);

  const [isListOpen, setListOpen] = useState(false);
  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  return (
    <Container>
      <Header></Header>
      <MainContainer>
        <LeftPanel></LeftPanel>
        <MainArea>
          <Calendar></Calendar>
          <TaskContainer></TaskContainer>
        </MainArea>
        <RightPanel>
          <Category>
            <button onClick={toggleList}></button>
            <span>카테고리 이름</span>
            {isListOpen && (
              <div>
                <p>List Item 1</p>
                <p>List Item 2</p>
                <p>List Item 3</p>
              </div>
            )}
          </Category>
        </RightPanel>
      </MainContainer>
    </Container>
  );
}

export default Main;
