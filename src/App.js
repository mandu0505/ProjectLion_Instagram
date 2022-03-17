import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Popup from "./components/Popup";

const Head = styled.div`
  &.active {
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
  }
`;

function App() {
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
      </Head>
      <Popup toggle={toggle} popup={popup} />
    </>
  );
}

export default App;
