import styled from "styled-components";
const ArticleCardStyle = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: no-wrap;
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
      margin-top: 1em;
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
      margin-top: 1.4em;
      position: absolute;
      bottom: 1.4em;
      span {
        margin-right: 0.8em;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .article-summary {
      color: #85888f;
      font-size: 0.8em;
      margin-top: 1.4em;
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
      overflow: hidden;
      .article-summary {
        white-space: nowrap;
        margin-top: 0.5em;
      }
      .article-info {
        position: relative;
        bottom: 0em;
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
export { ArticleCardStyle };
