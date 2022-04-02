import { useState, useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, TabItem, TabList, Logo, RightInfo } from "./style";
import { enableScroll, disableScroll } from "@/utils";

const Header: FC = () => {
  const tabList = [
    { title: "主页", path: "/home" },
    // { title: "分类", path: "/category" },
    // { title: "归档", path: "/archive" },
    { title: "关于", path: "/about" },
    // { title: "友链", path: "/friends" },
  ];
  // eslint-disable-next-line prefer-const
  let [showRight, switchMenu] = useState(false);
  let aniIndex = 0;
  useEffect(() => {
    if (showRight) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
  const tabDom = tabList.map((item, index) => {
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
        <NavLink to={item.path} activeClassName="nav-active">
          {item.title}
        </NavLink>
      </TabItem>
    );
  });
  return (
    <HeaderContainer>
      <Logo> Hey Hong </Logo>
      <TabList className={showRight ? "open" : ""}>
        {tabDom}
        <RightInfo
          style={{
            animation: showRight
              ? `0.3s ease-in slideIn forwards ${0.1 * aniIndex + 0.3}s`
              : "",
          }}
        >
          copyright
        </RightInfo>
      </TabList>
      <div
        className={[showRight ? "active burger" : "burger"].join(" ")}
        onClick={() =>
          switchMenu(showRight ? (showRight = false) : (showRight = true))
        }
      >
        <div className="top-line"></div>
        <div className="middle-line"></div>
        <div className="bottom-line"></div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
