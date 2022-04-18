import { FC, useEffect, useState } from "react";
import Wrapper from "@/components/PageWrapper";
import { useHistory } from "react-router-dom";
import article from "@/api/article";
import styled from "styled-components";
import { yearArticle } from "@/typings";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface tagPageState {
  id: string;
  name: string;
}
const Tag: FC = () => {
  const history = useHistory();
  const { id, name } = history.location.state as tagPageState;
  const [list, setList] = useState<yearArticle[]>();
  const getArticle = async () => {
    const res = await article.articleByTAg(id);
    if (res.code === 200) {
      setList(res.data);
    }
  };
  const toArticlePage = (id: string | number) => {
    history.push("/article", { id });
  };
  useEffect(() => {
    getArticle().catch((e) => console.log(e));
  }, []);
  const titleContent = () => (
    <>
      <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faTag} />
      {name}
    </>
  );
  const fomatDate = (date: string | undefined) => {
    const pre = date?.split(" ")[0].split("-");
    // @ts-ignore
    return [pre[1], pre[2]].join("-");
  };
  return (
    <Wrapper title={titleContent()}>
      <TagPage>
        {list?.length ? (
          list?.map((item, index) => (
            <div className="year-content" key={index}>
              <div className="year">
                <h2>{item.year}</h2>
              </div>
              <div className="list">
                {item.list.map((article) => (
                  <div
                    className="list-item"
                    onClick={() => toArticlePage(article.article_id)}
                    key={article.article_id}
                  >
                    <div className="list-date">
                      {fomatDate(article?.create_time)}
                    </div>
                    <div className="list-title">{article.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>暂无内容</div>
        )}
      </TagPage>
    </Wrapper>
  );
};

const TagPage = styled.div`
  .year-content {
    overflow: hidden;
    > .list {
      overflow: hidden;
      .list-item {
        display: flex;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #999;
        > .list-date {
          margin-right: 10px;
        }
        > .list-title {
          cursor: pointer;
        }
      }
    }
  }
`;
export default Tag;
