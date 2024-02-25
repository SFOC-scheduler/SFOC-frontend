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
  toggleTeam: () => void;
}

function TeamList({ teams, toggleTeam }: TeamListProps) {
  // 팀 목록을 클릭했을 때 팀 메뉴를 열기 위한 클릭 핸들러
  const handleTeamClick = () => {
    toggleTeam();
  };

  return (
    <TeamContainer>
      {teams.map((team) => (
        <Link key={team.id} to={`/main/${team.name}`} onClick={handleTeamClick}>
          <TeamBtn>{team.name}</TeamBtn>
        </Link>
      ))}
    </TeamContainer>
  );
}
export default TeamList;
