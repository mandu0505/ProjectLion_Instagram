import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Carousel from "../components/Body/Carousel";
import Contents from "../components/Content/Contents";
import Header from "../components/Navbar";
import Popup from "../components/Navbar/Popup";
import SideBanner from "../components/SideBanner";

const Head = styled.div`
  &.active {
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
  }
`;

function Homepage() {
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
        <Carousel />
        <SideBanner />
        <Contents />
      </Head>
      <Popup toggle={toggle} popup={popup} />
    </>
  );
}

export default Homepage;
