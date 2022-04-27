import styled from "styled-components";
import { Iarticle, tag } from "@/typings";
import { FC } from "react";
import Markdown from "../Markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "@/utils";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router";

const CopyRight = () => {
  return (
    <CopyRightWrap>
      <div className="copyright">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img
            alt="知识共享许可协议"
            src="https://i.creativecommons.org/l/by/4.0/80x15.png"
          />
        </a>
        <br />
        本作品采用
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          知识共享署名 4.0 国际许可协议
        </a>
        进行许可。
        <br />
        转载请注明来源。
      </div>
    </CopyRightWrap>
  );
};

interface TagsProps {
  tags: tag[] | undefined;
}
const Tags: FC<TagsProps> = ({ tags }) => {
  const history = useHistory();
  const tagClick = (item: tag) => {
    history.push(`/tag/${item.tag_id}`);
  };
  return (
    <TagsWrap>
      {tags?.length ? (
        <div className="tags-list">
          <FontAwesomeIcon
            icon={faTag}
            style={{ marginRight: "8px", marginBottom: "8px" }}
          />
          {tags.map((item) => {
            return (
              <Chip
                key={item.tag_id}
                size={"small"}
                style={{ marginRight: "8px", marginBottom: "8px" }}
                onClick={() => tagClick(item)}
                label={item.tag_name}
              />
            );
          })}
        </div>
      ) : (
        "无标签"
      )}
    </TagsWrap>
  );
};
const Content: FC<Iarticle> = (props) => {
  const { content, title, copyright, create_time, tags } = props;

  return (
    <>
      <ArticleContent>
        <div className="article">
          <div className="article-title">{title}</div>
          <div className="article-base-info">
            <div className="date">
              <FontAwesomeIcon icon={faClock} />
              {formatDate(create_time)}
            </div>
          </div>
          <div className="title-bottom-line"></div>
          <Markdown content={content} />
          <Tags tags={tags} />
          {copyright === 1 && <CopyRight />}
        </div>
      </ArticleContent>
    </>
  );
};
export default Content;

const ArticleContent = styled.div`
  max-width: 850px;
  margin: 0 auto;
  transition: 0.3s ease-in-out;
  animation: contentSlideIn 1s;
  .article {
    margin: 40px 10px;
    background: rgb(254 254 249);
    padding: 20px 16px 40px 16px;
    min-height: 50vh;
    box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  }
  .article-title {
    font-size: 24px;
    text-align: center;
    padding-bottom: 10px;
  }
  .article-base-info {
    margin-bottom: 20px;
    svg {
      margin-right: 4px;
    }
    .date {
      text-align: center;
      font-size: 12px;
      color: #7d7d7d;
    }
  }
  .title-bottom-line {
    width: 120px;
    height: 2px;
    background: #d3cdbb;
    margin: 0 auto;
  }
  @keyframes contentSlideIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CopyRightWrap = styled.div`
  margin-top: 60px;
  font-size: 12px;
  text-align: center;
  a {
    text-decoration: none;
    color: #0269c8;
    border-bottom: 1px solid #d1e9ff;
  }
`;

const TagsWrap = styled.div`
  margin-top: 40px;
  font-size: 12px;
  .tags-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  svg {
    font-size: 20px;
  }
`;
