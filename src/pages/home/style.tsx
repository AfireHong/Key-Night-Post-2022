import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 10px;
  .home-banner {
    width: 100%;
    height: 200px;
    background: #575761;
    .slogan-box {
      font-size: 1.2rem;
      color: #f3f3f3;
      text-align: center;
      height: 140px;
      line-height: 140px;
      .slogan {
        display: inline-block;
      }
    }
  }
  .article-list {
    max-width: 720px;
    margin: -80px auto 0;
    .decoration-line {
      height: 2px;
      width: 60%;
      background: #d4d4d4;
      margin: 0 auto 30px;
      box-shadow: 1px 1px 2px #acacac;
    }
  }
  @media screen and (max-width: 768px) {
    .slogan-box {
      font-size: 1rem;
    }
  }
`;
