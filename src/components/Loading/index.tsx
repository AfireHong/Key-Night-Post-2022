import { useEffect, useState, FC } from "react";
import styled from "styled-components";
interface propsType {
  visible: boolean;
  tips?: string;
  delay?: number;
}

let timer: ReturnType<typeof setTimeout>;
const Loading: FC<propsType> = (props) => {
  const [visible, switchVisible] = useState(false);
  useEffect(() => {
    if (props.delay) {
      // 防闪烁
      timer && clearTimeout(timer);
      if (props.visible) {
        timer = setTimeout(() => switchVisible(true), props.delay);
      } else {
        switchVisible(false);
      }
    } else {
      switchVisible(props.visible);
    }
  }, [props.visible, props.delay]);
  return (
    <>
      <LoadingWrapper className={visible ? "" : "hide"}>
        {props.children}
        <div className={props.children ? "loading-content" : ""}>
          <div className="wrapper">
            <div className="sword">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </LoadingWrapper>
    </>
  );
};
const LoadingWrapper = styled.div`
  position: relative;
  &.hide .loading-content {
    display: none;
  }
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .sword {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  .sword span {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .sword :first-child {
    left: 0%;
    top: 0%;
    border-bottom: 3px solid #c2c2c9;
  }
  .sword :first-child {
    animation: sword-one 1s linear infinite;
  }
  .sword :nth-child(2) {
    right: 0%;
    top: 0%;
    animation: sword-two 1s linear infinite;
    border-right: 3px solid #c2c2c9;
  }

  .sword :last-child {
    right: 0%;
    bottom: 0%;
    animation: sword-three 1s linear infinite;
    border-top: 3px solid #c2c2c9;
  }

  @keyframes sword-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes sword-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
  @keyframes sword-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
`;

export default Loading;
