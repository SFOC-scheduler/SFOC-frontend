import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import main_img from "../resources/main_img.png";
import logo_img from "../resources/logo_main.png";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background-color: rgb(236, 236, 237);
  display: flex;
  justify-content: center;
`;

interface MainContainerProps {
  imgSrc: string;
}

const MainImg = styled.div<MainContainerProps>`
  width: 1920px;
  height: 1080px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
  max-height: 40%;
  z-index: 1; /* 다른 이미지 위로 올리기 위해 z-index 설정 */
`;

function Welcome() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      history.push(`/main/mypage`);
    }
  }, []);

  return (
    <Container>
      <MainImg imgSrc={main_img}>
        <Link to="/login">
          <Logo src={logo_img} alt="logo_img"></Logo>
        </Link>
      </MainImg>
    </Container>
  );
}

export default Welcome;
