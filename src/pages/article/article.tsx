import article from "@/api/article";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FC } from "react";
import { Iarticle } from "@/typings";
import Content from "@/components/ArticleContent";
import PageArticle from "./style";
import Loading from "../../components/Loading/index";
interface articleId {
  id: string;
}
const useArticle = (id: string, setVisble: (value: boolean) => void) => {
  const [articleInfo, setInfo] = useState<Iarticle>();
  const getArticle = useCallback(async () => {
    setVisble(true);
    const { data, code } = await article.articleInfo(parseInt(id));
    if (code === 200) {
      setInfo(data);
      window.scrollTo(0, 0);
      setVisble(false);
    }
  }, [id, setVisble]);
  useEffect(() => {
    getArticle();
  }, [getArticle]);
  return [articleInfo];
};
const Article: FC = () => {
  const history = useHistory();
  const { id } = history.location.state as articleId;
  const [visible, setVisble] = useState(true);
  const [articleInfo] = useArticle(id, setVisble);
  return (
    <>
      <Loading visible={visible}>
        <PageArticle>
          <Content
            title={articleInfo?.title}
            content={articleInfo?.content}
          ></Content>
        </PageArticle>
      </Loading>
    </>
  );
};

export default Article;
