import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const Head = styled.div`
  float: right;
  width: 260px;
  height: 100%;
  margin: -120px 250px 0 0;
  padding: 10px;
`;
const My = styled.div`
  .icon {
    font-size: 50px;
    margin: 0px 0 -15px 0;
  }
  .title {
    font-weight: 800;
    margin: 0 0 0 20px;
  }
  .toggle {
    margin: 0 0 0 120px;
    color: #0095f6;
    cursor: pointer;
    font-size: 12px;
  }
`;
const Section = styled.div`
  margin: 30px 0 0 5px;
  font-size: 14px;
  font-weight: 600;
  .title {
    color: #8e8e8e;
  }
  .all {
    float: right;
    cursor: pointer;
  }
`;
const Lists = styled.div`
  margin: 20px 0 0 5px;
  .icon {
    font-size: 30px;
    margin: 0px 0 -15px 0;
  }
  .id {
    margin: 0 0 0 10px;
  }
  .name {
    color: #8e8e8e;
    margin: 0 0 0 40px;
  }
  .follow {
    float: right;
    margin: -35px 0 0 0;
    cursor: pointer;
    color: #0095f6;
    font-size: 12px;
  }
`;

function SideBanner() {
  return (
    <Head>
      <My>
        <span>
          <FaRegUserCircle className="icon" />
        </span>
        <span className="title">Name</span>
        <span className="toggle">전환</span>
      </My>
      <Section>
        <span className="title">회원님을 위한 추천</span>
        <span className="all">모두 보기</span>
      </Section>
      <Lists>
        <div>
          <span>
            <FaRegUserCircle className="icon" />
          </span>
          <span>
            <span className="id">InstagramID</span>
            <div className="name">이름</div>
          </span>
          <div className="follow">팔로우</div>
        </div>
        <div>
          <span>
            <FaRegUserCircle className="icon" />
          </span>
          <span>
            <span className="id">InstagramID2</span>
            <div className="name">이름2</div>
          </span>
          <div className="follow">팔로우</div>
        </div>
        <div>
          <span>
            <FaRegUserCircle className="icon" />
          </span>
          <span>
            <span className="id">InstagramID3</span>
            <div className="name">이름3</div>
          </span>
          <div className="follow">팔로우</div>
        </div>
        <div>
          <span>
            <FaRegUserCircle className="icon" />
          </span>
          <span>
            <span className="id">InstagramID4</span>
            <div className="name">이름4</div>
          </span>
          <div className="follow">팔로우</div>
        </div>
        <div>
          <span>
            <FaRegUserCircle className="icon" />
          </span>
          <span>
            <span className="id">InstagramID5</span>
            <div className="name">이름5</div>
          </span>
          <div className="follow">팔로우</div>
        </div>
      </Lists>
      <div>
        <div></div>
        <div></div>
      </div>
    </Head>
  );
}

export default SideBanner;
