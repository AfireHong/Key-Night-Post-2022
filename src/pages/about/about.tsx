import styled from "styled-components";
export default function About() {
  return (
    <AboutWrapper>
      <div className="content">
        <p>这里是一名初级前端工程师</p>
        <p>Vue/React、Webpack/Vite、Node</p>
        <p>From 长沙</p>
        <br />
        <p>联系我：</p>
        <p>email: varhong2018@gmail.com</p>
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
