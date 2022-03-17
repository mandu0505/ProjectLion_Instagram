import React from "react";
import styled from "styled-components";
import { FaRegImages } from "react-icons/fa";

const Popups = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 530px;
  padding: 25px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  background: #fff;
  visibility: hidden;
  transition: 0.3s;
  border-radius: 10px;
  &.active {
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
  }
  .header {
    border-bottom: 1px solid #d1cdcd;
    .close {
      width: 50px;
      height: 30px;
      font-size: 35px;
      border-radius: 100px;
      margin-left: 930px;
      margin-top: -100px;
      &:hover {
        cursor: pointer;
      }
    }
    .title {
      font-weight: 500;
      text-align: center;
      margin-top: 50px;
      padding: 8px;
    }
    .login {
      justify-content: center;
      text-align: center;
      align-items: center;
      margin: -30px 0 20px 0;
      font-weight: 600;
    }
  }
  .body {
    .img {
      margin-left: 215px;
      margin-top: 190px;
      font-size: 80px;
    }
    .title {
      position: absolute;
      margin-top: 100px;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-32%, -50%);
      padding-bottom: 50px;
      font-size: 23px;
      font-weight: 100;
    }
    .button {
      text-align: center;
      position: absolute;
      margin-top: 120px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      width: 110px;
      font-size: 15px;
      background: #0095f6;
      padding: 7px 0 7px 0;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

function Popup({ toggle, popup }) {
  return (
    <Popups className={popup}>
      <div className="header">
        <div className="close" onClick={toggle}>
          X
        </div>
        <div className="title">새 게시물 만들기</div>
      </div>
      <div className="body">
        <FaRegImages className="img" />
        <div className="title">사진과 동영상을 여기에 끌어다 놓으세요</div>
        <div className="button">컴퓨터에서 선택</div>
      </div>
    </Popups>
  );
}

export default Popup;
