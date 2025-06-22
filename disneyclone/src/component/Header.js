import Styled from 'styled-components';

const Header = (props) => {
    return <Nav>
        <LOGO><img src="/img/feathers.png" alt="Logo" /></LOGO>
        <NavMenu>=-=</NavMenu>
        <Login onClick={props.onLogin}>Login</Login>
         </Nav>;
   

};
const Nav = Styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
   z-index: 3;
`;
const LOGO = Styled.div`
    width: 220px;
    margin-top: 4px;
    img {
        width: 100%;
    }
`;
const Login = Styled.button`
  font-weight: bold;
  color: rgb(166, 166, 201);
  background: linear-gradient(90deg, rgba(104, 233, 97, 0.8),rgba(0, 0, 255, 0.25), rgb(0, 0, 0, 0.8));
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  font-size: 30px;
  margin-top: 8px;
  border: 1px solid rgb(7, 7, 56);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 10px;
  width: 10%;  
  height: 60%; 
  &:hover {
    background: linear-gradient(90deg, rgba(240, 240, 247, 1),rgba(0, 0, 255, 0.50), rgb(0, 0, 0, 1));
    color: rgb(255, 255, 255);
    transform: scale(1.10);
    transition: all 0.5s ease-in-out;
  }
`;
const NavMenu = Styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 ;
  margin-right: auto;
  position: relative;
  margin-left: 200px;
  @media (max-width: 768px) {
    display: none;
  } 
`;
export default Header;