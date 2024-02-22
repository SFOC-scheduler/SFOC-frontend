import { useState } from "react";
import styled from "styled-components";

const RightPanel = styled.div`
  width: 380px;
  height: 100%;
  padding: 30px;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  width: 200px;
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

function Main_RightPanel() {
  const [isListOpen, setListOpen] = useState(false);
  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  return (
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
  );
}

export default Main_RightPanel;
