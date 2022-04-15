import { FC } from "react";
import styled from "styled-components";

interface WrapperProp {
  title?: FC | string;
}
const PageWrapper: FC<WrapperProp> = (props) => (
  <>
    <Wrapper>
      <div className="title">{props.title}</div>
      <div className="content">{props.children}</div>
    </Wrapper>
  </>
);

export default PageWrapper;
const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 720px;
  .title {
    text-align: center;
    font-size: 24px;
    padding-bottom: 10px;
    //border-bottom: 2px solid #9a9a9a;
    width: 58px;
    margin: 0 auto;
  }
  .content {
    margin: 40px 10px;
    padding: 30px;
    background: #fff;
    animation: slideIn ease-in-out 0.3s;
  }
  @keyframes slideIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
