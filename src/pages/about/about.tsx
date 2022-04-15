import Wrapper from "@/components/PageWrapper";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Popover } from "@mui/material";
import * as React from "react";
import wechatImg from "@/assets/images/wechat.jpg";

// const map = {
//   wechat: "Afire_HonG",
//   email: "varhong2018@gmail.com",
// };
const wechatEl = "wechatEl";
export default function About() {
  const [anchorEl, setAnchorEl] = useState<SVGElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<SVGElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Wrapper title={"关于"}>
      <AboutWrapper>
        <p>这里是一名小前端开发</p>
        <p>Vue/React、Webpack/Vite、Node</p>
        <div className="contact">
          {/*<p>contact</p>*/}
          <p className="contact-item">
            <a
              href="mailto:varhong2018@gmail.com?subject=标题&body=内容"
              style={{ color: "#24292e" }}
            >
              <FontAwesomeIcon icon={faEnvelope} aria-describedby={wechatEl} />
            </a>
            <FontAwesomeIcon
              icon={faWeixin}
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
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

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <img
          src={wechatImg}
          style={{ width: "200px", height: "200px" }}
          alt={"微信"}
        />
      </Popover>
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
