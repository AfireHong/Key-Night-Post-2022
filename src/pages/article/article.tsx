import article from "@/api/article";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FC } from "react";
import { Iarticle } from "@/typings";
import Content from "@/components/ArticleContent";
import PageArticle from "./style";
import Loading from "../../components/Loading/index";
interface articleId {
  id: string;
}
const useArticle = (id: string, setVisible: (value: boolean) => void) => {
  const [articleInfo, setInfo] = useState<Iarticle>();
  const getArticle = useCallback(async () => {
    setVisible(true);
    const { data, code } = await article.articleInfo(id);
    if (code === 200) {
      setInfo(data);
      window.scrollTo(0, 0);
      setVisible(false);
    }
  }, [id, setVisible]);
  useEffect(() => {
    getArticle();
  }, [getArticle]);
  return [articleInfo];
};
const Article: FC = () => {
  const params = useParams();
  const { id } = params as articleId;
  const [visible, setVisible] = useState(true);
  const [articleInfo] = useArticle(id, setVisible);
  return (
    <>
      <Loading visible={visible}>
        <PageArticle>
          <Content {...articleInfo}></Content>
        </PageArticle>
      </Loading>
    </>
  );
};

export default Article;
