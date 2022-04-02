import styled from "styled-components";
export default function About() {
  return (
    <AboutWrapper>
      <div className="content">
        <p>Hi~</p>
        <p>你发现我了</p>
        <p>这里是一名前端工程师</p>
        <p>Vue/React、Webpack/Vite、Node</p>
        <p>From 长沙</p>
        <p>很高兴认识你</p>
      </div>
    </AboutWrapper>
  );
}
const AboutWrapper = styled.div`
  margin: 80px auto;
  max-width: 720px;
  .content {
    margin: 40px 10px;
    padding: 30px;
    background: #fff;
    animation: slideIn ease-in-out 0.3s;
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
