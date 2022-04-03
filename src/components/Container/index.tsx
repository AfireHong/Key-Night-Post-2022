import { ReactChild, ReactFragment, ReactPortal } from "react";
import styled from "styled-components";
export default function Container(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return <PageContainer>{props.children}</PageContainer>;
}
const PageContainer = styled.div`
  min-height: calc(100vh - 180px);
  overflow: hidden;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 180px);
  }
`;
