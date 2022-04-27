import { FC } from "react";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.min.css";
import styled from "styled-components";
interface Props {
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
const Markdown: FC<Props> = ({ content }) => {
  return (
    <>
      <MarkdownWrap>
        <div
          dangerouslySetInnerHTML={{
            __html: translateMarkdown(content || ""),
          }}
        />
      </MarkdownWrap>
    </>
  );
};

export default Markdown;
const MarkdownWrap = styled.div`
  width: 100%;
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
  p {
    code {
      word-break: break-word;
      border-radius: 2px;
      overflow-x: auto;
      background-color: #fff5f5;
      color: #ff502c;
      font-size: 0.87em;
      padding: 0.065em 0.4em;
    }
    a {
      text-decoration: none;
      color: #0269c8;
      border-bottom: 1px solid #d1e9ff;
    }
  }
  img {
    width: 100%;
  }
`;
