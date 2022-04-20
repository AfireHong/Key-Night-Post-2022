import { FC } from "react";
import Wrapper from "@/components/PageWrapper";
import { useHistory } from "react-router-dom";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Index from "@/components/FilterArticleYear";
interface tagPageState {
  id: string;
  name: string;
  count: number;
}
const Tag: FC = () => {
  const history = useHistory();
  const { id, name, count } = history.location.state as tagPageState;
  const titleContent = () => (
    <>
      <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faTag} />
      {name}
    </>
  );
  return (
    <Wrapper title={titleContent()}>
      <Index id={id} count={count} type={"tag"} />
    </Wrapper>
  );
};
export default Tag;
