import { FC, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import ArticleCard from "@/components/ArticleCard";
import { Iarticle } from "../../typings/index";
import ArticleAPI from "@/api/article";
import Loading from "@/components/Loading";

const Home: FC = () => {
  // let articleList: Iarticle[] = [];
  const [articleList, setList] = useState([]);
  const [visible, setVisible] = useState(true);
  const getArticleList = async () => {
    const { data, code } = await ArticleAPI.articleList();
    if (code === 200) {
      setList(data.rows);
    } else {
      setList([]);
    }
    setVisible(false);
  };
  useEffect(() => {
    getArticleList();
  }, []);

  const articleCardList = articleList.map((item: Iarticle, index) => (
    <ArticleCard key={item.article_id} info={item} index={index} />
  ));
  return (
    <HomeWrapper>
      <div className="home-banner">
        <div className="slogan-box">
          <span className="slogan">无尽的远方，无穷的人们，都和我有关!</span>
        </div>
      </div>
      <div className="article-list">
        <div className="decoration-line"></div>
        <Loading visible={visible}>{articleCardList}</Loading>
      </div>
    </HomeWrapper>
  );
};

export default Home;
