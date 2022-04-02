import styled from "styled-components";

const ArticleContent = styled.div`
  max-width: 720px;
  margin: 0 auto;
  transition: 0.3s ease-in-out;
  animation: contentSlideIn 1s;
  .article {
    margin: 40px 20px;
    background: #faf6e5;
    padding: 20px;
    box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  }
  .article-title {
    font-size: 28px;
  }
  /* .hljs-con {
    position: relative;
  } */
  pre {
    padding: 8px 2px;
    border-radius: 5px;
    /* position: relative; */
    overflow: scroll;
    background: #2f2f2f;
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
    @keyframes contentSlideIn {
      from {
        opacity: 0;
        transform: translateY(200px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
export default ArticleContent;
