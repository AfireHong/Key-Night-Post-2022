const preventFun = (e: Event) => {
  e.preventDefault();
};

let height: number;
export const disableScroll = (): void => {
  document.body.addEventListener("touchmove", preventFun, {
    passive: false,
  });
  height = (document.scrollingElement as Element).scrollTop;
  document.body.setAttribute(
    "style",
    `position: fixed; width: 100%; top: -${height}px`
  );
};

export const enableScroll = (): void => {
  document.body.removeEventListener("touchmove", preventFun);
  document.body.setAttribute("style", "position: initial; height: 100%;");
  // (document.scrollingElement as Element).scrollTop = height;
  window.scrollTo({
    top: height,
    behavior: "auto",
  });
};
