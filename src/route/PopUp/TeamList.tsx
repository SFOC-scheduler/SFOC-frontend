import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const TeamContainer = styled.div`
  position: absolute;
  z-index: 20;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
`;

const TeamBtn = styled.button`
  border: 0;
  width: 240px;
  height: 56px;
  margin-top: 1px;
`;

interface Team {
  id: number;
  name: string;
}

interface TeamListProps {
  teams: Team[];
}

function TeamList({ teams }: TeamListProps) {
  return (
    <TeamContainer>
      {teams.map((team) => (
        <Link key={team.id} to={`/main/${team.name}`}>
          <TeamBtn>{team.name}</TeamBtn>
        </Link>
      ))}
    </TeamContainer>
  );
}

export default TeamList;
