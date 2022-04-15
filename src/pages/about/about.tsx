import Wrapper from "@/components/PageWrapper";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { copyTextToClipboard } from "@/utils";

const map = {
  wechat: "Afire_HonG",
  email: "varhong2018@gmail.com",
};
export default function About() {
  const [open, setOpen] = useState<boolean>();
  const clickContactHandler = (type: "wechat" | "email") => {
    const text = map[type];
    copyTextToClipboard(text)
      .then(() => {
        setOpen(true);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Wrapper title={"关于"}>
      <AboutWrapper>
        <p>这里是一名小前端开发</p>
        <p>Vue/React、Webpack/Vite、Node</p>
        <div className="contact">
          {/*<p>contact</p>*/}
          <p className="contact-item">
            <FontAwesomeIcon
              icon={faEnvelope}
              onClick={() => {
                clickContactHandler("email");
              }}
            />
            <FontAwesomeIcon
              icon={faWeixin}
              onClick={() => {
                clickContactHandler("wechat");
              }}
            />
          </p>
        </div>
        <br />
        <p>steam/switch玩家/LoL玩家</p>
        <p>（本质上啥都玩）</p>
        <p>理想主义与浪漫主义人类</p>
        <p>From 长沙</p>
        <br />
        <p>本博客由本人独立设计与开发</p>
        <p>建立初衷是为了记录学习与生活</p>
        <p>欢迎与我交流</p>
        <br />
      </AboutWrapper>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpen(false)}
        message="copied！"
      />
    </Wrapper>
  );
}

const AboutWrapper = styled.div`
  text-align: center;
  line-height: 1;
  .contact-item {
    svg {
      margin-right: 8px;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;
