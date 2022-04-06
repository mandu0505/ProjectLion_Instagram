import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Navbar";
import Popup from "../components/Navbar/Popup";

const Head = styled.div`
  &.active {
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
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
      <h1>프로필</h1>
      </Head>
      <Popup toggle={toggle} popup={popup} />
    </>
  );
}

export default Profile;
