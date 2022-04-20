import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.min.css";
import styled from "styled-components";

import { FC } from "react";

interface Icontent {
  title: string | undefined;
  content: string | undefined;
}
const translateMarkdown = (text: string) => {
  marked.setOptions({
    renderer: new marked.Renderer(undefined),
    highlight(code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });
  return marked(text);
};

const Content: FC<Icontent> = (props) => {
  return (
    <>
      <ArticleContent>
        <div className="article">
          <div className="article-title">{props.title}</div>
          <div className="title-bottom-line"></div>
          <div
            dangerouslySetInnerHTML={{
              __html: translateMarkdown(props.content || ""),
            }}
          ></div>
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
    padding-bottom: 20px;
  }
  .title-bottom-line {
    width: 120px;
    height: 2px;
    background: #d3cdbb;
    margin: 0 auto;
  }
  pre {
    padding: 8px 2px;
    border-radius: 5px;
    overflow: scroll;
    background: #2f2f2f;
    code {
      color: #fff;
    }
    ol {
      list-style: decimal;
      margin: 0;
      margin-left: 40px;
      padding: 0;
      li {
        list-style: decimal-leading-zero;
        position: relative;
        padding-left: 10px;
        .line-num {
          position: absolute;
          left: -40px;
          top: 0;
          width: 40px;
          height: 100%;
          border-right: 1px solid rgba(0, 0, 0, 0.66);
        }
      }
    }
    b.name {
      position: absolute;
      top: 2px;
      right: 12px;
      z-index: 10;
      color: #999;
      pointer-events: none;
    }
  }

  blockquote {
    border-left: 3px solid #d3cdbb;
    margin-left: 12px;
    padding-left: 10px;
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
