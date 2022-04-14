import { FC, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import ArticleCard from "@/components/ArticleCard";
import { Iarticle } from "../../typings/index";
import ArticleAPI from "@/api/article";
import Loading from "@/components/Loading";
import Pagination from "@mui/material/Pagination";
interface PostInfo {
  rows: Iarticle[];
  count: number;
  pages: number;
}
const Home: FC = () => {
  const [postInfo, setList] = useState<PostInfo>();
  const [visible, setVisible] = useState(false);

  // 获取文章列表
  const getArticleList = async (page = 1, pageSize = 5) => {
    setVisible(true);
    const { data, code } = await ArticleAPI.articleList(pageSize, page);
    if (code === 200) {
      setList({
        rows: data.rows,
        count: data.count,
        pages: Math.ceil(data.count / pageSize),
      });
    }
    setVisible(false);
  };

  // 切换页码
  const pageChange = (e: unknown, page: number) => {
    window.scrollTo({
      top: 0,
    });
    getArticleList(page);
  };

  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <HomeWrapper>
      <div className="home-banner">
        <div className="slogan-box">
          <span className="slogan">留下虚度光阴的一些证据</span>
        </div>
      </div>
      <div className="article-list">
        <div className="decoration-line"></div>
        <Loading visible={visible}>
          {postInfo?.rows.map((item: Iarticle, index) => (
            <ArticleCard key={item.article_id} info={item} index={index} />
          ))}
        </Loading>
      </div>
      <Pagination
        className="pageination"
        count={postInfo?.pages}
        onChange={pageChange}
      />
    </HomeWrapper>
  );
};

export default Home;
