import { FC } from "react";
import { useParams } from "react-router-dom";
import Index from "@/components/FilterArticleYear";
interface catePageState {
  id: string;
}
const Category: FC = () => {
  const params = useParams();
  const { id } = params as catePageState;
  return <Index id={id} type={"cate"} />;
};

export default Category;
