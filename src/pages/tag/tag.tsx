import { FC, useEffect, useState } from "react";
import Wrapper from "@/components/PageWrapper";
import { useHistory } from "react-router-dom";
import article from "@/api/article";
import styled from "styled-components";
import { yearArticle } from "@/typings";
interface tagPageState {
  id: string;
}
const Tag: FC = () => {
  const history = useHistory();
  const { id } = history.location.state as tagPageState;
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
  return (
    <Wrapper title={"标签"}>
      <TagPage>
        {list?.map((item, index) => (
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
                    {article?.create_time?.split(" ")[0]}
                  </div>
                  <div className="list-title">{article.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
