import { ReactChild, ReactFragment, ReactPortal, Suspense } from "react";
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
  return (
    <Suspense fallback={"loading"}>
      <PageContainer>{props.children}</PageContainer>
    </Suspense>
  );
}
const PageContainer = styled.div`
  min-height: calc(100vh - 180px);
  overflow: hidden;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 180px);
  }
`;
