import styled from "styled-components";
import main_img from "../resources/main_img.png";
import logo_img from "../resources/logo_1.png";
import back_img from "../resources/back_btn.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

const FormContainer = styled.div`
  padding: 0px 12%;
  height: 100%;
  width: 75%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const Text = styled.span`
  font-size: 40px;
`;

const Logo = styled.img`
  max-width: 210px;
  max-height: 60px;
  margin-top: 20%;
  margin-bottom: 30%;
`;

const BackBtn = styled.button`
  position: absolute;
  margin-top: 4%;
  margin-left: 4%;
  padding: 5px;
  width: 24px;
  height: 24px;
  z-index: 1;
  background-image: url(${back_img});
  border: 0px;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40%;
`;

const SocialBtn = styled.button`
  width: 40%;
  height: 100%;
  max-width: 240px;
  max-height: 60px;
  border: 0px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  width: 40%;
  height: 100%;
  max-width: 240px;
  max-height: 60px;
  border: 0px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const teamName = "mypage";

function Login() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    console.log(token);

    if (token) {
      localStorage.setItem("token", token);
      history.push(`/main/${teamName}`);
    }
  }, [location.search, history]);

  return (
    <Container>
      <MainImg imgSrc={main_img}>
        <Link to="/">
          <BackBtn></BackBtn>
        </Link>
        <FormContainer>
          <Text>조직적 협력을 위한</Text>
          <Logo src={logo_img}></Logo>
          <Text style={{ fontWeight: 1000 }}>스케줄러</Text>
          <BtnContainer>
            <SocialBtn
              as="a"
              href="https://dev.sfoc.kro.kr/oauth2/authorization/google"
            >
              Google
            </SocialBtn>
            <StyledLink to={`/main/${teamName}`}>
              <SocialBtn
                as="a"
                href="https://dev.sfoc.kro.kr/oauth2/authorization/kakao"
              >
                Kakao
              </SocialBtn>
            </StyledLink>
          </BtnContainer>
        </FormContainer>
      </MainImg>
    </Container>
  );
}
export default Login;
