import { useState, useEffect } from "react";
import styled from "styled-components";
import { createThrottle } from "@/utils/throttle";

export function BackToTop() {
  const [show, switchShow] = useState(false);
  useEffect(() => {
    const listener = createThrottle(() => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== show) {
        switchShow(shouldShow);
      }
    }, 300) as EventListener;
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [show]);

  return show ? (
    <BackToTopBtn
      onClick={() =>
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        })
      }
    ></BackToTopBtn>
  ) : null;
}

const BackToTopBtn = styled.div`
  position: fixed;
  right: 11%;
  bottom: 15%;
  width: 42px;
  height: 42px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  animation: slideIn 0.3s;
  &:before {
    content: "▲";
    display: block;
    text-align: center;
    color: #aaa;
    line-height: 42px;
  }
  &:hover:before {
    content: "回顶部";
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
