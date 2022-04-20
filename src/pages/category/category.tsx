import { FC } from "react";
import PageWrapper from "@/components/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Index from "@/components/FilterArticleYear";
interface catePageState {
  id: string;
  name: string;
  count: number;
}
const Category: FC = () => {
  const history = useHistory();
  const { id, name, count } = history.location.state as catePageState;
  const titleContent = () => (
    <>
      <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faBox} />
      {name}
    </>
  );
  return (
    <PageWrapper title={titleContent()}>
      <Index id={id} count={count} type={"cate"} />
    </PageWrapper>
  );
};

export default Category;
