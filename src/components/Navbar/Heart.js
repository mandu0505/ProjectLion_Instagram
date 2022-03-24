import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

const Actions = styled.div`
  background-color: #fff;
  color: #222222;
  border-radius: 100px;
  font-size: 18px;
  .menu {
    position: absolute;
    margin-top: -30px;
    right: 258px;
    width: 500px;
    background: #fff;
    height: 350px;
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
  }
`;
const Content = styled.div`
  border-bottom: 1px solid #999999;
  .title {
    padding: 15px;
    font-weight: 800;
  }
  .text {
    padding-bottom: 20px;
    .icon {
      font-size: 20px;
      margin: 0px 10px 0px 10px;
    }
    .detail {
      .gray {
        color: gray;
      }
    }
    .user {
      font-weight: 800;
    }
    .button {
      float: right;
      border: 1px solid #999999;
      padding: 5px;
      border-radius: 5px;
      margin: 0 10px 0 30px;
    }
  }
`;

function Heart() {
  const [menu, setMenu] = useState("menu");
  const menuToggle = () => {
    setMenu(menu === "menu" ? "menu active" : "menu");
  };
  return (
    <Actions onClick={menuToggle}>
      <div className="profile">
        <AiOutlineHeart />
      </div>
      <div className={menu}>
        <Content>
          <div className="title">어제</div>
          <div className="text">
            <CgProfile className="icon" />
            <span className="detail">
              <span className="user">유저 1</span>님이 회원님을 팔로우하기
              시작했습니다. <span className="gray">1일</span>
            </span>
            <span className="button">팔로잉</span>
          </div>
        </Content>
        <Content>
          <div className="title">이번 주</div>
          <div className="text">
            <CgProfile className="icon" />
            <span className="detail">
              <span className="user">유저 2</span>님이 회원님을 팔로우하기
              시작했습니다. <span className="gray">3일</span>
            </span>
            <span className="button">팔로잉</span>
          </div>
        </Content>
        <Content>
          <div className="title">이번 달</div>
          <div className="text">
            <CgProfile className="icon" />
            <span className="detail">
              <span className="user">유저 3</span>님이 회원님을 팔로우하기
              시작했습니다. <span className="gray">1주</span>
            </span>
            <span className="button">팔로잉</span>
          </div>
          <div className="text">
            <CgProfile className="icon" />
            <span className="detail">
              <span className="user">유저 4</span>님이 회원님을 팔로우하기
              시작했습니다. <span className="gray">2주</span>
            </span>
            <span className="button">팔로잉</span>
          </div>
        </Content>
      </div>
    </Actions>
  );
}

export default Heart;
