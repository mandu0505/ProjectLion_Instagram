import styled from "styled-components";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane, BiSearchAlt2 } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import logo from "../components/logo.png";
import Profile from "./Profile";
import Heart from "./Heart";

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
const Label = styled.div`
  left: 70px;
  width: 200px;
  padding: 7px 10px;
  border-radius: 5px;
  background-color: #efefef;
  border: none;
  position: relative;
  color: gray;
  .icon {
    margin-bottom: -4px;
  }
`;
const Input = styled.input`
  width: 90%;
  height: 100%;
  background-color: #efefef;
  border: none;
  &:focus {
    outline: none;
  }
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
        <Column>
          <Label>
            <BiSearchAlt2 className="icon" />
            <Input type="text" placeholder="검색" />
          </Label>
        </Column>
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
