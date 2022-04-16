import { useState, useEffect, useRef, FC } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, TabItem, TabList, Logo, RightInfo } from "./style";
import { enableScroll, disableScroll } from "@/utils";
const Header: FC = () => {
  const tabList = [
    { title: "主页", path: "/home" },
    // { title: "分类", path: "/category" },
    { title: "归档", path: "/archive" },
    { title: "关于", path: "/about" },
    // { title: "友链", path: "/friends" },
  ];
  const [showRight, switchMenu] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    function handler(event: Event) {
      const el = headerRef?.current;
      if (!el || (el as Node).contains(event.target as Node)) {
        return;
      }
      switchMenu(false);
    }
    if (showRight) {
      disableScroll();
      window.addEventListener("click", handler);
    } else {
      enableScroll();
    }
    return () => window.removeEventListener("click", handler);
  });
  const tabClick = () => switchMenu(false);
  let aniIndex = 0;
  return (
    <HeaderContainer>
      <Logo> Key Night </Logo>
      <TabList ref={headerRef} className={showRight ? "open" : ""}>
        {tabList.map((item, index) => {
          aniIndex++;
          return (
            <TabItem
              key={item.path}
              style={{
                animation: showRight
                  ? `0.3s ease-in headerSlideIn forwards ${0.1 * index + 0.3}s`
                  : "",
              }}
            >
              <NavLink
                to={item.path}
                onClick={tabClick}
                activeClassName="nav-active"
              >
                {item.title}
              </NavLink>
            </TabItem>
          );
        })}
        <RightInfo
          style={{
            animation: showRight
              ? `.3s ease-in fadeIn forwards ${0.1 * aniIndex + 0.6}s`
              : "",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div className="sidetab-tips">
            本站使用React、TypeScript开发
            <br />
            由Vite构建
            <br />
            托管在阿里云OSS
          </div>
        </RightInfo>
      </TabList>
      <div
        className={[showRight ? "active burger" : "burger"].join(" ")}
        onClick={() => switchMenu(!showRight)}
      >
        <div className="top-line"></div>
        <div className="middle-line"></div>
        <div className="bottom-line"></div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
