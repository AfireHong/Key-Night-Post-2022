import styled from "styled-components";
const TabList = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-between;
  max-width: 380px;
  flex-direction: flex-end;
  .sidetab-tips {
    text-align: center;
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    color: #757474;
  }
`;
const TabItem = styled.div`
  cursor: pointer;
  font-weight: 600;
  margin-left: 30px;
  a {
    border-bottom: 2px solid transparent;
    padding: 10px 0;
    color: #7c7c7c;
    transition: 0.2s linear;
  }
  a:hover {
    color: #1b1b1b;
    border-bottom: 2px solid #1b1b1b;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 600px;
  color: #85888f;
  flex: 1;
`;
const RightInfo = styled.div`
  display: none;
  position: absolute;
  bottom: 20px;
`;
const HeaderContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  height: 80px;
  background: #fff;
  position: fixed;
  z-index: 9999;
  box-shadow: 1px 1px 18px #b5b5b5;
  .burger div {
    width: 25px;
    height: 3px;
    background: #797a7a;
    margin: 4px;
  }
  .burger {
    display: none;
  }
  .nav-active {
    color: #1b1b1b;
    border-bottom: 2px solid #1b1b1b;
  }
  @media screen and (max-width: 768px) {
    ${TabList} {
      position: fixed;
      top: 0;
      padding: 80px 0;
      right: 0;
      width: 50vw;
      height: calc(100vh - 80px);
      background: #ffffff;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      transform: translateX(100%);
      transition: 0.4s ease-in-out;
      z-index: 99;
    }
    ${RightInfo} {
      display: block;
      bottom: 140px;
      transform: translateX(20px);
      opacity: 0;
    }
    .open {
      transform: translateX(0);
      box-shadow: 1px 1px 18px #747474;
    }
    ${TabItem} {
      margin: 3vh;
      transform: translateX(20px);
      opacity: 0;
    }
    .burger {
      display: block;
      z-index: 100;
      .top-line {
        transform: rotate(0);
        transition: 0.3s ease-in-out;
      }
      .bottom-line {
        transform: rotate(0);
        transition: 0.3s ease-in-out;
      }
      .middle-line {
        transform: translateX(0);
        transition: 0.4s ease-in-out;
        opacity: 1;
      }
    }
    .burger.active {
    }
    .burger.active div {
      transition: 0.3s ease-in-out 0.3s;
    }
    .burger.active .top-line {
      transform: rotate(45deg) translate(4px, 6px);
    }
    .burger.active .bottom-line {
      transform: rotate(-45deg) translate(4px, -6px);
    }
    .burger.active .middle-line {
      opacity: 0;
      transform: translateX(10px);
      transition: 0.3s ease-in-out;
    }
    @keyframes headerSlideIn {
      from {
        transform: translateX(20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;
export { HeaderContainer, TabItem, TabList, Logo, RightInfo };
