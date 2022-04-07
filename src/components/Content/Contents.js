import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const Head = styled.div`
  margin-left: 250px;
  .top {
    display: flex;
    .logo {
      font-size: 30px;
    }
    .title {
      margin-top: 5px;
      margin-left: 50px;
    }
    .dots {
      margin-left: 450px;
      margin-top: 5px ;
    }
  }
  .photo {
    text-align: center;
    margin-top: 0px;
    font-size: 50px;
    font-weight: 800;
    background-color: #000;
    color: #fff;
    width: 52%;
    height: 400px;
  }
`;

function Contents() {
  return (
    <Head>
      <div className="top">
        <div>
          <FaRegUserCircle className="logo" />
        </div>
        <div className="title">사람</div>
        <div className="dots">쩜쩜쩜</div>
      </div>
      <div className="photo">사진</div>
    </Head>
  );
}

export default Contents;
