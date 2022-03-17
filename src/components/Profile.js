import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { RiArrowGoForwardFill } from "react-icons/ri";
import styled from "styled-components";

const Actions = styled.div`
  background-color: #fff;
  color: #222222;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  .menu {
    position: absolute;
    margin-top: -30px;
    right: 226px;
    background: #fff;
    width: 250px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    visibility: hidden;
    opacity: 0;
    z-index: 100000;
    &.active {
      top: 100px;
      visibility: visible;
      opacity: 1;
      @media (max-width: 991px) {
        visibility: hidden;
        width: 0;
        height: 0;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 28px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: rotate(45deg);
    }
    h3 {
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      color: #555;
      line-height: 1.2em;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px 20px;
      .icon {
        margin-right: 20px;
      }
    }
    .border {
      border-top: 1px solid gray;
      width: 84%;
    }
  }
`;

function Profile() {
  const [menu, setMenu] = useState("menu");
  const menuToggle = () => {
    setMenu(menu === "menu" ? "menu active" : "menu");
  };
  return (
    <Actions onClick={menuToggle}>
      <div>
        <CgProfile />
      </div>
      <div className={menu}>
        <h3>
          <CgProfile className="icon" />
          프로필
          <br />
        </h3>
        <h3>
          <BsBookmark className="icon" />
          저장됨
          <br />
        </h3>
        <h3>
          <AiOutlineSetting className="icon" />
          설정
          <br />
        </h3>
        <h3>
          <RiArrowGoForwardFill className="icon" />
          계정 전환
          <br />
        </h3>
        <h3 className="border">
          로그아웃
          <br />
        </h3>
      </div>
    </Actions>
  );
}

export default Profile;
