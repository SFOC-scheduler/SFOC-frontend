import styled from "styled-components";

const TeamContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
  border-radius: 5px;
`;

const TeamBtn = styled.button`
  border: 0;
  width: 240px;
  height: 56px;
  margin-top: 1px;
`;

function TeamList() {
  return (
    <TeamContainer>
      <TeamBtn>team1</TeamBtn>
      <TeamBtn>team2</TeamBtn>
    </TeamContainer>
  );
}

export default TeamList;
