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
  (document.scrollingElement as Element).scrollTop = height;
  // window.scrollTo({
  //   top: height,
  //   behavior: "auto",
  // });
};

export const copyTextToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
};

export const formatDate = (dateStr: string | undefined) => {
  if (!dateStr) return "";
  const arr = dateStr.split(" ");
  const date = arr[0];
  const hour = Number(arr[1].split(":")[0]);
  let hourDesc = "凌晨";
  if (hour > 6 && hour < 12) {
    hourDesc = "上午";
  } else if (hour >= 12 && hour < 14) {
    hourDesc = "中午";
  } else if (hour >= 14 && hour < 16) {
    hourDesc = "下午";
  } else if (hour >= 16 && hour <= 23) {
    hourDesc = "晚上";
  }
  return `${date} ${hourDesc}`;
};
