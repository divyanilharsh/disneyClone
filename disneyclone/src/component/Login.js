import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Content>  
            🚀 What is Disney+ Hotstar?
Owned by: Disney (acquired via 21st Century Fox).

Primary Market: India (dominant), plus Southeast Asia (Indonesia, Malaysia, Thailand).

Key Features:

🏏 Cricket Monopoly: Exclusive rights to IPL (Indian Premier League), ICC tournaments, and major bilateral series.

🎬 Local + Global Content: Bollywood/regional films, Indian originals, Disney/Pixar movies, HBO shows (e.g., Game of Thrones), Star Wars/Marvel series.

📱 Mobile-First: Optimized for affordable internet access in emerging markets.


            </Content>
        </Container>
    );
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color:rgb(0, 0, 0);
font-family: 'Bastliga One', sans-serif;


color: rgb(100, 100, 100);
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(186, 11, 142, 0.55);
text-align: center;
`;
const Content = styled.div`

`; 


export default Login; 