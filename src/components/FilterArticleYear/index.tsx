import { filterRsp, yearArticle } from "@/typings";
import article from "@/api/article";
import { useHistory } from "react-router-dom";
import { useState, useCallback, useEffect, FC } from "react";
import styled from "styled-components";
interface FilterProps {
  id: string;
  type: string;
  count?: number;
}
const Index: FC<FilterProps> = ({ id, type, count }) => {
  const history = useHistory();
  const [data, setList] = useState<filterRsp>();
  const getArticle = useCallback(async () => {
    if (type === "tag") {
      const res = await article.articleByTag(id);
      if (res.code === 200) {
        setList(res.data);
      }
    }
    if (type === "cate") {
      const res = await article.articleByCate(id);
      if (res.code === 200) {
        setList(res.data);
      }
    }
  }, [id, type]);
  const toArticlePage = (id: string | number) => {
    history.push("/article", { id });
  };
  const fomatDate = (date: string | undefined) => {
    const pre = date?.split(" ")[0].split("-");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [pre[1], pre[2]].join("-");
  };
  useEffect(() => {
    getArticle();
  }, [getArticle]);
  return (
    <Page>
      <div>共{data?.count || count}篇</div>
      {data?.list?.length ? (
        data.list?.map((item, index) => (
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
    </Page>
  );
};

const Page = styled.div`
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
export default Index;
