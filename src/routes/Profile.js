import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Navbar";
import Popup from "../components/Navbar/Popup";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const Head = styled.div`
  &.active {
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 250px;
    .photo {
      margin-top: 100px;
      margin-left: 100px;
      font-size: 150px;
    }
    .contents {
      margin-top: 100px;
      margin-left: -100px;
      .name {
        font-size: 25px;
        margin-right: 100px;
      }
      .profile {
        font-weight: 600;
        border: 1px solid gray;
        padding: 3px 5px 3px 5px;
        border-radius: 5px;
        margin-top: -30px;
      }
      .setting {
        margin-left: 30px;
        font-size: 20px;
        margin-top: 30px;
      }
      .numbers {
        margin-top: 50px;
        .art1 {
        }
        .follower {
          margin-left: 30px;
        }
        .follow {
          margin-left: 30px;
        }
      }
    }
  }
  .bottom {
  }
`;

function Profile() {
  const [popup, setPopup] = useState("popup");
  const [blur, setBlur] = useState("blur");
  const toggle = () => {
    setPopup(popup === "popup" ? "popup active" : "popup");
    setBlur(blur === "blur" ? "blur active" : "blur");
  };
  return (
    <>
      <Head className={blur}>
        <Header toggle={toggle} />
        <div className="top">
          <div className="photo">
            <FaRegUserCircle />
          </div>
          <div className="contents">
            <div>
              <span className="name">이름</span>
              <span className="profile">프로필 편집</span>
              <span className="setting">
                <FiSettings />
              </span>
            </div>
            <div className="numbers">
              <span className="art1">게시물 0</span>
              <span className="follower">팔로워 100</span>
              <span className="follow">팔로우 100</span>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </Head>
      <Popup toggle={toggle} popup={popup} />
    </>
  );
}

export default Profile;
