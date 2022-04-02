import ArticleContent from "./style";
import hljs from "highlight.js";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.min.css";

import { FC } from "react";
interface Icontent {
  title: string | undefined;
  content: string | undefined;
}
const translateMarkdown = (text: string) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight(code) {
      const html = Prism.highlight(
        code,
        Prism.languages.javascript,
        "javascript"
      );
      return html;
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
