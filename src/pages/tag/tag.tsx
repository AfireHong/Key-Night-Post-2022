import { FC } from "react";
import { useParams } from "react-router-dom";
import Index from "@/components/FilterArticleYear";
interface tagPageState {
  id: string;
}
const Tag: FC = () => {
  const params = useParams();
  const { id } = params as tagPageState;
  return <Index id={id} type={"tag"} />;
};
export default Tag;
