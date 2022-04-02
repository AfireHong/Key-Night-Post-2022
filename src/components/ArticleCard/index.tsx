import { FC } from "react";
import { ArticleCardStyle } from "./style";
import { Iarticle } from "../../typings/index";
import { useHistory } from "react-router";
interface CardProps {
  info: Iarticle;
  index: number;
}
const ArticleCard: FC<CardProps> = (props) => {
  const { info, index } = props;
  const history = useHistory();
  const toArticlePage = () => {
    history.push("./article", { id: info.article_id });
  };
  const tags = info.tags.map((item) => (
    <span key={item.tag_id}>{item.tag_name}</span>
  ));
  return (
    <ArticleCardStyle
      img_url={info.img_url}
      style={{
        animation: `slideIn ease-in-out ${index * 0.2 + 0.3}s`,
      }}
    >
      {info.img_url ? (
        <div className="card-img">
          <img src={info.img_url} alt="" />
        </div>
      ) : (
        ""
      )}
      <div className="card-detail">
        <div className="article-title" onClick={toArticlePage}>
          {info.title}
        </div>
        <div className="article-summary">{info.summary}</div>
        <div className="article-info">
          <span>{info.create_time?.split(" ")[0]}</span>
          <span>{info.cate?.cate_name || ""}</span>
          {tags}
        </div>
      </div>
    </ArticleCardStyle>
  );
};

export default ArticleCard;
