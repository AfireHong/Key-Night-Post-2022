import { ReactChild, ReactFragment, ReactPortal } from "react";
import { PageContainer } from "./style";
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
