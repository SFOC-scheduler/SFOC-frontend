import styled from "styled-components";
import search_icon from "../../resources/Icon/search_icon.png";

interface BtnProps {
  imgSrc: string;
}

const LeftPanel = styled.div`
  width: 380px;
  height: 100%;
  padding: 30px;
  border-right: 1px solid black;
`;

const LeftPanel_Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchBtn = styled.div<BtnProps>`
  width: 33px;
  height: 33px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border: 0px;
  background-color: transparent;
`;

const SearchInput = styled.input`
  width: 80%;
  border: 0;
  border-bottom: 1px solid black;
`;

function Main_LeftPanel() {
  return (
    <LeftPanel>
      <LeftPanel_Header>
        <SearchBtn imgSrc={search_icon}></SearchBtn>
        <SearchInput placeholder="팀 또는 일정 검색"></SearchInput>
      </LeftPanel_Header>
    </LeftPanel>
  );
}

export default Main_LeftPanel;
