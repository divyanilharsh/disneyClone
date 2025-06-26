import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setSignOut());
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <LOGO>
        <img src="/img/feathers.png" alt="Logo" />
      </LOGO>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Home />
            <Search />
            <About />
            <WatchList />
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleSignOut}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = Styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const LOGO = Styled.div`
    width: 80px;
    margin-top: 4px;
    img {
        width: 100%;
    }
`;

const Login = Styled.button`
  font-weight: bold;
  color: rgb(166, 166, 201);
  background: linear-gradient(90deg, rgba(104, 233, 97, 0.8),rgba(0, 0, 255, 0.25), rgb(0, 0, 0, 0.8));
  padding: 4px 0;
  letter-spacing: 1.5px;
  font-size: 12px;
  margin-top: 8px;
  border: 1px solid rgb(7, 7, 56);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 10px;
  width: 100px;
  height: 30px;
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
  margin-left: 50px;
  @media (max-width: 400px) {
    display: none;
  } 
    
`;

const Home = Styled.a`
  position: relative;
  display: inline-flex; 
  align-items: center; 
  height: 40px;
  text-decoration: none; 
  padding: 0 15px; 
  cursor: pointer;

  &::before { 
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("/img/home.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%); 
    margin-right: 10px; 
  }

  &::after { 
    content: "Home";
    color: #f9f9f9; 
    font-size: 10px;
    font-weight: bold;
  }
  
  &:hover {
   transition: transform 0.5s ease-in-out; 
   transform: scale(1.1); 

   &::before { 
     filter: invert(20%); 
     transition: filter 0.5s ease-in-out; 
   }
  }
`;

const Search = Styled.a`
 position: relative;
  display: inline-flex; 
  align-items: center; 
  height: 40px;
  text-decoration: none; 
  padding: 0 15px; 
  cursor: pointer;

  &::before { 
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("/img/search.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%); 
    margin-right: 10px; 
  }

  &::after { 
    content: "Search ";
    color: #f9f9f9; 
    font-size: 10px;
    font-weight: bold;
  }
  
  &:hover {
   transition: transform 0.5s ease-in-out; 
   transform: scale(1.1); 

   &::before { 
     filter: invert(20%); 
     transition: filter 0.5s ease-in-out; 
   }
  }
`;

const About = Styled.a`
  position: relative;
  display: inline-flex; 
  align-items: center; 
  height: 40px;
  text-decoration: none; 
  padding: 0 15px; 
  cursor: pointer;

  &::before { 
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("/img/about.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%); 
    margin-right: 10px; 
  }

  &::after { 
    content: "About";
    color: #f9f9f9; 
    font-size: 10px;
    font-weight: bold;
  }
  
  &:hover {
   transition: transform 0.5s ease-in-out; 
   transform: scale(1.1); 

   &::before { 
     filter: invert(20%); 
     transition: filter 0.5s ease-in-out; 
   }
  }
`;

const WatchList = Styled.a`
  position: relative;
  display: inline-flex; 
  align-items: center; 
  height: 40px;
  text-decoration: none; 
  padding: 0 15px; 
  cursor: pointer;

  &::before { 
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("/img/watchlist.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%); 
    margin-right: 10px; 
  }

  &::after { 
    content: "Watchlist";
    color: #f9f9f9; 
    font-size: 10px;
    font-weight: bold;
  }
  
  &:hover {
   transition: transform 0.5s ease-in-out; 
   transform: scale(1.1); 

   &::before { 
     filter: invert(20%); 
     transition: filter 0.5s ease-in-out; 
   }
  }
`;

const UserImg = Styled.img`
  height: 100%;
  border-radius: 50%;
  width: 100%;
`;

const DropDown = Styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = Styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;