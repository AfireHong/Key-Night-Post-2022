import { FC } from "react";
import { Iarticle } from "@/typings";
import { useHistory } from "react-router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faClock } from "@fortawesome/free-solid-svg-icons";
interface CardProps {
  info: Iarticle;
  index: number;
}
const ArticleCard: FC<CardProps> = (props) => {
  const { info, index } = props;
  const history = useHistory();
  const toArticlePage = () => {
    history.push(`./article/${info.article_id}`);
  };
  // const tags = info.tags.map((item) => (
  //   <span key={item.tag_id}>{item.tag_name}</span>
  // ));
  const toCatePage = (item: Iarticle) => {
    history.push(`/category/${item.cate?.cate_id}`);
  };
  return (
    <ArticleCardStyle
      img_url={info.img_url}
      style={{
        animation: `slideIn ease-in-out ${index * 0.2 + 0.3}s`,
      }}
    >
      {info.img_url ? (
        <div className="card-img">
          <img src={info.img_url} onClick={toArticlePage} alt="" />
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
          <span>
            <FontAwesomeIcon icon={faClock} />
            {info.create_time?.split(" ")[0]}
          </span>
          <span className="cate-info" onClick={() => toCatePage(info)}>
            <FontAwesomeIcon icon={faBox} />
            {info.cate?.cate_name || ""}
          </span>
          {/* <span>
            <FontAwesomeIcon icon={faTags} />
            {tags}
          </span> */}
        </div>
      </div>
    </ArticleCardStyle>
  );
};

export default ArticleCard;

const ArticleCardStyle = styled.div`
  padding: 10px;
  display: flex;
  background: #f9f9f9;
  margin: 40px 10px;
  animation: slideIn 0.6s ease-in-out;
  font-size: 20px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  transition: 0.3s ease-in-out;
  height: 160px;
  box-sizing: content-box;
  &:hover {
    box-shadow: 0 0 6px rgb(0 0 0 / 20%);
  }
  .card-img {
    width: 50%;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-detail {
    padding: 20px;
    overflow: hidden;
    color: #686868;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    .article-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .article-summary {
      color: #85888f;
      font-size: 0.8em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .article-time {
      font-size: 0.7em;
      margin-top: 0.8em;
    }
    .article-info {
      color: #85888f;
      font-size: 0.7em;
      position: absolute;
      bottom: 1.4em;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      white-space: nowrap;
      span {
        margin-right: 0.8em;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 4px;
        }
      }
      .cate-info {
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .article-summary {
      color: #85888f;
      font-size: 0.8em;
      margin-top: 1em;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: ${(props: { img_url: string | undefined }) =>
      props.img_url ? "320px" : "115px"};
    .card-img {
      width: 100%;
      height: 60%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-detail {
      margin: 0;
      padding: 0.5em;
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      justify-content: space-between;
      .article-summary {
        white-space: nowrap;
      }
      .article-info {
        position: relative;
        bottom: 0;
        width: 100%;
      }
    }
  }
  @keyframes slideIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
