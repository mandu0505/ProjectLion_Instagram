import React from "react";
import styled from "styled-components";

const Swiper = styled.div`
  margin: 30px 0 0 225px;
  display: flex;
  .tabs {
    width: 592px;
    height: 85px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    background-color: white;
    padding: 16px 10px;
    margin: 0 0 24px;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
    .story {
      font-size: 12px;
      margin: 0 10px;
      text-align: center;
      .img {
        width: 56px;
        height: 56px;
        border-radius: 50px;
        background-color: rgb(199, 199, 199);
        margin: 10px 0 5px 0;
      }
    }
  }
  #left {
    top: 50px;
    left: 23px;
  }
  #right {
    top: 50px;
    right: 23px;
  }
`;
const Arrow = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 11px;
  &:hover {
    cursor: pointer;
  }
`;

const Carousel = () => {
  let users = [
    "사람1",
    "사람2",
    "사람3",
    "사람4",
    "사람5",
    "사람6",
    "사람7",
    "사람8",
    "사람9",
    "사람10",
  ];

  return (
    <Swiper>
      <Arrow
        className="arrow"
        id="left"
        onClick={() => {
          document.querySelector(".tabs").scrollLeft -= 200;
        }}
      >
        {"<"}
      </Arrow>
      <div className="tabs">
        {users.map((story, index) => (
          <div className="story" key={index}>
            <div className="img"></div>
            <div>{story}</div>
          </div>
        ))}
      </div>
      <Arrow
        className="arrow"
        id="right"
        onClick={() => {
          document.querySelector(".tabs").scrollLeft += 200;
        }}
      >
        {">"}
      </Arrow>
    </Swiper>
  );
};

export default Carousel;
