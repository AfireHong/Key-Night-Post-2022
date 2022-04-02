const preventFun = (e: Event) => {
  e.preventDefault();
};

export const disableScroll = (): void => {
  document.body.addEventListener("touchmove", preventFun, {
    passive: false,
  });
  document.body.setAttribute("style", "position: fixed; width: 100%");
};

export const enableScroll = (): void => {
  document.body.removeEventListener("touchmove", preventFun);
  document.body.setAttribute("style", "position: initial; height: 100%");
};
