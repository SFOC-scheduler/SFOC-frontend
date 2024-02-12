import styled from "styled-components";
import main_img from "../resources/main_img.png";
import logo_img from "../resources/logo_1.png";
import back_img from "../resources/back_btn.png";

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
`;

function Login() {
  return (
    <Container>
      <MainImg imgSrc={main_img}>
        <BackBtn></BackBtn>
        <FormContainer>
          <Text>조직적 협력을 위한</Text>
          <Logo src={logo_img}></Logo>
          <Text style={{ fontWeight: 1000 }}>스케줄러</Text>
          <BtnContainer>
            <SocialBtn>Google</SocialBtn>
            <SocialBtn>Kakao</SocialBtn>
          </BtnContainer>
        </FormContainer>
      </MainImg>
    </Container>
  );
}
export default Login;
