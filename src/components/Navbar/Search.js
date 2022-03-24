import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const Menu = styled.div`
  position: absolute;
  margin-top: -30px;
  right: 240px;
  width: 350px;
  background: #fff;
  height: 350px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  visibility: hidden;
  opacity: 0;
  z-index: 100000;
  &.active {
    top: 110px;
    margin-right: 290px;
    visibility: visible;
    opacity: 1;
  }
  &::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 160px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: rotate(45deg);
    }
`;
const Content = styled.div`
  padding: 15px;
  .title {
    font-weight: 800;
  }
  .remove {
    float: right;
    color: #0095f6;
    cursor: pointer;
  }
  .text {
    color: gray;
    text-align: center;
    margin-top: 150px;
  }
`;
const Column = styled.div`
  display: flex;
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

function Search() {
  const [menu, setMenu] = useState("menu");
  const menuToggle = () => {
    setMenu(menu === "menu" ? "menu active" : "menu");
  };
  return (
    <>
      <Column onClick={menuToggle}>
        <Label>
          <BiSearchAlt2 className="icon" />
          <Input type="text" placeholder="검색" />
        </Label>
      </Column>
      <Menu className={menu}>
        <Content>
          <span className="title">최근 검색 항목</span>
          <span className="remove">모두 지우기</span>
          <div className="text">최근 검색 내역 없음.</div>
        </Content>
      </Menu>
    </>
  );
}

export default Search;
