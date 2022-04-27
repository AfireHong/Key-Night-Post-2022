import { filterRsp } from "@/typings";
import article from "@/api/article";
import { useHistory } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { useState, useCallback, useEffect, FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
interface FilterProps {
  id: string;
  type: string;
}
const Index: FC<FilterProps> = ({ type, id }) => {
  const history = useHistory();
  const [data, setData] = useState<filterRsp>();
  const getArticle = useCallback(async () => {
    if (type === "tag") {
      const res = await article.articleByTag(id);
      if (res.code === 200) {
        setData(res.data);
      }
    }
    if (type === "cate") {
      const res = await article.articleByCate(id);
      if (res.code === 200) {
        setData(res.data);
      }
    }
  }, [id, type]);
  const toArticlePage = (id: string | number | undefined) => {
    history.push(`/article/${id}`);
  };
  const formatDate = (date: string | undefined) => {
    const pre = date?.split(" ")[0].split("-");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [pre[1], pre[2]].join("-");
  };
  const titleContent = () => {
    const name = data?.name || "";
    return (
      <>
        <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faBox} />
        {name}
      </>
    );
  };
  useEffect(() => {
    getArticle();
  }, [getArticle]);
  return (
    <PageWrapper title={titleContent()}>
      <Page>
        <div>共{data?.count}篇</div>
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
                    onClick={() => toArticlePage(article?.article_id)}
                    key={article.article_id}
                  >
                    <div className="list-date">
                      {formatDate(article?.create_time)}
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
    </PageWrapper>
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
