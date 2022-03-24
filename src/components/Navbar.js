import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import logo from "../img/logo.png";
import Profile from "./Navbar/Profile";
import Heart from "./Navbar/Heart";
import Search from "./Navbar/Search";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #efefef;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 100px;
`;
const Icon = styled.span`
  margin-left: 15px;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  .popup,
  .heart,
  .profile {
    cursor: pointer;
  }
`;

function Header({ toggle }) {
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <Img alt="logo" type="image/png" src={logo} />
        </Column>
        <Search />
        <Column>
          <IconsContainer>
            <Icon>
              <AiFillHome />
            </Icon>
            <Icon>
              <BiPaperPlane />
            </Icon>
            <Icon className="popup">
              <FiPlusSquare onClick={toggle} />
            </Icon>
            <Icon>
              <FaRegCompass />
            </Icon>
            <Icon className="heart">
              <Heart />
            </Icon>
            <Icon className="profile">
              <Profile />
            </Icon>
          </IconsContainer>
        </Column>
      </Wrapper>
    </SHeader>
  );
}
export default Header;
