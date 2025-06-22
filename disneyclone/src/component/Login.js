import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
         <Content>  
          <BgImage />
          <Cta>
             <CtaLogo src= "img/feathers.png" alt=""></CtaLogo>
               <SignUp> 
                  GET ALL There
               </SignUp>
              <GradientHeading>Welcome to the Login Page</GradientHeading>
              <Cat2Logo src="img/dove.png" alt=""></Cat2Logo>
            </Cta>
         </Content>
        </Container>
    );
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
height: 100vh;
font-family: 'Angelos', sans-serif;
text-align: center;
`;

const GradientHeading = styled.h1`
background: repeating-radial-gradient(
  rgb(164, 171, 175) 0%,
  rgb(181, 228, 185) 50%,
  rgb(32, 13, 126) 90%
);
-webkit-background-clip: text;
background-clip: text;
color: transparent;


`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


padding: 80px 40px;



`; 
const BgImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;
const Cta = styled.div`

`;
const CtaLogo = styled.img`
 
`;

const Cat2Logo = styled.img`
 
`;
const SignUp = styled.button`
  font-weight: bold;
  color: rgb(166, 166, 201);
  background: linear-gradient(90deg, rgba(240, 240, 247, 0.8),rgba(0, 0, 255, 0.25), rgb(0, 0, 0, 0.8));
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  font-size: 50px;
  margin-top: 8px;
  border: 1px solid rgb(7, 7, 56);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 10px;
  width: 100%;  
  height: 10%; 
  &:hover {
    background: linear-gradient(90deg, rgba(240, 240, 247, 1),rgba(0, 0, 255, 0.50), rgb(0, 0, 0, 1));
    color: rgb(255, 255, 255);
    transform: scale(1.10);
    transition: all 0.5s ease-in-out;
  }
      

`;

  



export default Login;