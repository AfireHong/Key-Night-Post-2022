import { memo } from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
  width: 100%;
  height: 100px;
  background-color: #575761;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
`;
export default memo(function () {
  const date = new Date();
  const nowYear = date.getFullYear();
  return (
    <FooterContainer>
      <div className="foot-info">版权所有</div>
      <div className="foot-year">2021-{nowYear}</div>
    </FooterContainer>
  );
});
